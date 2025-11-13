import z from 'zod'
import { CustomerInputSchema, CustomerResultSchema } from '../../generated/zod/schemas' // Adjusted path
import { PrismaClient } from 'generated/prisma/client'

const prisma = new PrismaClient()

export const BaseCustomerInput = CustomerInputSchema.pick({
  name: true,
  email: true,
  phone: true,
  address: true
})

export type BaseCustomerInputType = z.infer<typeof BaseCustomerInput>

export const BaseCustomerResult = CustomerResultSchema.pick({
  id: true,
  name: true,
  email: true,
  phone: true,
  address: true
})
export type BaseCustomerResultType = z.infer<typeof BaseCustomerResult>

export const createCustomer = async (
  data: BaseCustomerInputType
): Promise<BaseCustomerResultType> => {
  const validatedData = BaseCustomerInput.parse(data)
  const customer = await prisma.customer.create({
    data: {
      name: validatedData.name,
      email: validatedData.email,
      phone: validatedData.phone,
      address: validatedData.address
    }
  })
  return BaseCustomerResult.parse(customer)
}

export const getCustomerById = async (id: number): Promise<BaseCustomerResultType> => {
  const customerById = await prisma.customer.findUnique({
    where: { id }
  })
  if (!customerById) {
    throw new Error('Customer not found')
  }
  return BaseCustomerResult.parse(customerById)
}

export const getAllCustomers = async (): Promise<BaseCustomerResultType[]> => {
  const customers = await prisma.customer.findMany()
  return customers.map((customer) => BaseCustomerResult.parse(customer))
}

export const updateCustomer = async (
  id: number,
  data: Partial<BaseCustomerInputType>
): Promise<BaseCustomerResultType> => {
  const validatedData = BaseCustomerInput.partial().parse(data)
  const updatedCustomer = await prisma.customer.update({
    where: { id },
    data: {
      ...validatedData
    }
  })
  return BaseCustomerResult.parse(updatedCustomer)
}

export const deleteCustomer = async (id: number): Promise<void> => {
  await prisma.customer.delete({
    where: { id }
  })
}
