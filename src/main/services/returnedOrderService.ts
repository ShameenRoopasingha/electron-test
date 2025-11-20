import { validate } from '../../../lib/validate'
import { getPrisma } from '../../../lib/utils'
import { ReturnedOrderInputSchema, ReturnedOrderResultSchema } from '../../generated/zod/schemas' // Adjusted path
import { z } from 'zod'
const prisma = getPrisma()
export const BaseReturnedOrderInput = ReturnedOrderInputSchema.omit({
  id: true,
  createdAt: true,
  bill: true,
  item: true
})
export type BaseReturnedOrderInputType = z.infer<typeof BaseReturnedOrderInput>
export const BaseReturnedOrderResult = ReturnedOrderResultSchema.omit({
  bill: true,
  item: true
})
export type BaseReturnedOrderResultType = z.infer<typeof BaseReturnedOrderResult>
export const createReturnedOrder = async (
  data: BaseReturnedOrderInputType
): Promise<BaseReturnedOrderResultType> => {
  const validatedData = validate(BaseReturnedOrderInput, data)
  const returnedOrder = await prisma.returnedOrder.create({
    data: {
      billId: validatedData.billId,
      itemId: validatedData.itemId,
      quantity: validatedData.quantity,
      reason: validatedData.reason
    }
  })
  return BaseReturnedOrderResult.parse(returnedOrder)
}
export const getReturnedOrderById = async (id: number): Promise<BaseReturnedOrderResultType> => {
  const returnedOrderById = await prisma.returnedOrder.findUnique({
    where: { id }
  })
  if (!returnedOrderById) {
    throw new Error('ReturnedOrder not found')
  }
  return BaseReturnedOrderResult.parse(returnedOrderById)
}
export const getAllReturnedOrders = async (): Promise<BaseReturnedOrderResultType[]> => {
  const returnedOrders = await prisma.returnedOrder.findMany()
  return returnedOrders.map((returnedOrder) => BaseReturnedOrderResult.parse(returnedOrder))
}
export const updateReturnedOrder = async (
  id: number,
  data: Partial<BaseReturnedOrderInputType>
): Promise<BaseReturnedOrderResultType> => {
  const validatedData = BaseReturnedOrderInput.partial().parse(data)
  const updatedReturnedOrder = await prisma.returnedOrder.update({
    where: { id },
    data: { ...validatedData }
  })
  return BaseReturnedOrderResult.parse(updatedReturnedOrder)
}
export const deleteReturnedOrder = async (id: number): Promise<void> => {
  await prisma.returnedOrder.delete({
    where: { id }
  })
}
