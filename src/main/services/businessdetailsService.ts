import { BusinessDetailsInputSchema, BusinessDetailsResultSchema } from 'generated/zod/schemas'
import { getPrisma } from '../../../lib/utils'
import z from 'zod'
import { validate } from '../../../lib/validate'

const prisma = getPrisma()

export const BaseBusinessDetailsInput = BusinessDetailsInputSchema.pick({
  name: true,
  address: true,
  email: true,
  phone: true,
  logoUrl: true
})

export type BaseBusinessDetailsInputType = z.infer<typeof BaseBusinessDetailsInput>

export const BaseBusinessDetailsResult = BusinessDetailsResultSchema.omit({
  createdAt: true,
  updatedAt: true,
  logoUrl: true,
  ownerId: true,
  id: true
})
export type BaseBusinessDetailsResultType = z.infer<typeof BaseBusinessDetailsResult>

export const CreateBusinessDetailsSchema = BaseBusinessDetailsInput.extend({
  ownerId: z.number()
})

export type CreateBusinessDetailsInputType = z.infer<typeof CreateBusinessDetailsSchema>

export const createBusinessDetails = async (
  input: CreateBusinessDetailsInputType
): Promise<BaseBusinessDetailsResultType> => {
  const validatedInput = validate(CreateBusinessDetailsSchema, input)
  const { ownerId, ...data } = validatedInput

  const businessDetails = await prisma.businessDetails.create({
    data: {
      ...data,
      owner: {
        connect: { id: ownerId }
      }
    },
    select: {
      name: true,
      address: true,
      email: true,
      phone: true,
      logoUrl: true
    }
  })

  return BaseBusinessDetailsResult.parse(businessDetails)
}

export const updateBusinessDetails = async (
  id: number,
  data: Partial<BaseBusinessDetailsInputType>
): Promise<BaseBusinessDetailsResultType> => {
  const validatedData = BaseBusinessDetailsInput.partial().parse(data)
  const updatedBusinessDetails = await prisma.businessDetails.update({
    where: { id },
    data: { ...validatedData },
    select: {
      name: true,
      address: true,
      email: true,
      phone: true,
      logoUrl: true
    }
  })
  return BaseBusinessDetailsResult.parse(updatedBusinessDetails)
}

export const getBusinessDetailsById = async (
  id: number
): Promise<BaseBusinessDetailsResultType> => {
  const businessDetails = await prisma.businessDetails.findUnique({
    where: { id },
    select: {
      name: true,
      address: true,
      email: true,
      phone: true,
      logoUrl: true
    }
  })
  if (!businessDetails) {
    throw new Error('Business details not found')
  }
  return BaseBusinessDetailsResult.parse(businessDetails)
}
