import { PrismaClient } from 'generated/prisma/client'
import { ExpiredItemInputSchema, ExpiredItemResultSchema } from '../../generated/zod/schemas' // Adjusted path
import { z } from 'zod'
const prisma = new PrismaClient()
export const BaseExpiredItemInput = ExpiredItemInputSchema.omit({
  id: true,
  createdAt: true,
  item: true,
  user: true
})
export type BaseExpiredItemInputType = z.infer<typeof BaseExpiredItemInput>
export const BaseExpiredItemResult = ExpiredItemResultSchema.omit({
  item: true,
  user: true
})
export type BaseExpiredItemResultType = z.infer<typeof BaseExpiredItemResult>
export const createExpiredItem = async (
  data: BaseExpiredItemInputType
): Promise<BaseExpiredItemResultType> => {
  const validatedData = BaseExpiredItemInput.parse(data)
  const expiredItem = await prisma.expiredItem.create({
    data: {
      itemId: validatedData.itemId,
      quantity: validatedData.quantity,
      expirationDate: validatedData.expirationDate,
      disposedBy: validatedData.disposedBy,
      reason: validatedData.reason
    }
  })
  return BaseExpiredItemResult.parse(expiredItem)
}
export const getExpiredItemById = async (id: number): Promise<BaseExpiredItemResultType> => {
  const expiredItemById = await prisma.expiredItem.findUnique({
    where: { id }
  })
  if (!expiredItemById) {
    throw new Error('ExpiredItem not found')
  }
  return BaseExpiredItemResult.parse(expiredItemById)
}
export const getAllExpiredItems = async (): Promise<BaseExpiredItemResultType[]> => {
  const expiredItems = await prisma.expiredItem.findMany()
  return expiredItems.map((expiredItem) => BaseExpiredItemResult.parse(expiredItem))
}
export const updateExpiredItem = async (
  id: number,
  data: Partial<BaseExpiredItemInputType>
): Promise<BaseExpiredItemResultType> => {
  const validatedData = BaseExpiredItemInput.partial().parse(data)
  const updatedExpiredItem = await prisma.expiredItem.update({
    where: { id },
    data: { ...validatedData }
  })
  return BaseExpiredItemResult.parse(updatedExpiredItem)
}
export const deleteExpiredItem = async (id: number): Promise<void> => {
  await prisma.expiredItem.delete({
    where: { id }
  })
}
