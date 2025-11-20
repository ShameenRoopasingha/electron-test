import { SupplierInputSchema, SupplierResultSchema } from '../../generated/zod/schemas' // Adjusted path
import { z } from 'zod'
import { getPrisma } from '../../../lib/utils'
import { validate } from '../../../lib/validate'

const prisma = getPrisma()

export const BaseSupplierInput = SupplierInputSchema.pick({
  name: true,
  email: true,
  phone: true,
  company: true,
  address: true
})
export type BaseSupplierInputType = z.infer<typeof BaseSupplierInput>

export const BaseSupplierResult = SupplierResultSchema.pick({
  id: true,
  name: true,
  email: true,
  phone: true,
  company: true,
  address: true
})
export type BaseSupplierResultType = z.infer<typeof BaseSupplierResult>

export const createSupplier = async (
  data: BaseSupplierInputType
): Promise<BaseSupplierResultType> => {
  const validatedData = validate(BaseSupplierInput,data)
  const supplier = await prisma.supplier.create({
    data: {
      name: validatedData.name,
      email: validatedData.email,
      phone: validatedData.phone,
      company: validatedData.company,
      address: validatedData.address
    }
  })
  return BaseSupplierResult.parse(supplier)
}

export const getSupplierById = async (id: number): Promise<BaseSupplierResultType> => {
  const supplierById = await prisma.supplier.findUnique({
    where: { id }
  })
  if (!supplierById) {
    throw new Error('Supplier not found')
  }
  return BaseSupplierResult.parse(supplierById)
}

export const getAllSuppliers = async (): Promise<BaseSupplierResultType[]> => {
  const suppliers = await prisma.supplier.findMany()
  return suppliers.map((supplier) => BaseSupplierResult.parse(supplier))
}
export const updateSupplier = async (
  id: number,
  data: Partial<BaseSupplierInputType>
): Promise<BaseSupplierResultType> => {
  const validatedData = BaseSupplierInput.partial().parse(data)
  const updatedSupplier = await prisma.supplier.update({
    where: { id },
    data: { ...validatedData }
  })
  return BaseSupplierResult.parse(updatedSupplier)
}
export const deleteSupplier = async (id: number): Promise<void> => {
  await prisma.supplier.delete({
    where: { id }
  })
}
