import { PrismaClient } from 'generated/prisma/client'
import { RestockInputSchema, RestockResultSchema } from '../../generated/zod/schemas' // Adjusted path
import { z } from 'zod'
const prisma = new PrismaClient()
export const BaseRestockInput = RestockInputSchema.omit({
  id: true,
  createdAt: true,
  supplier: true,
  user: true,
  items: true
})
export type BaseRestockInputType = z.infer<typeof BaseRestockInput>
export const BaseRestockResult = RestockResultSchema.omit({
  supplier: true,
  user: true,
  items: true
})
export type BaseRestockResultType = z.infer<typeof BaseRestockResult>
export const createRestock = async (data: BaseRestockInputType): Promise<BaseRestockResultType> => {
  const validatedData = BaseRestockInput.parse(data)
  const restock = await prisma.restock.create({
    data: {
      supplierId: validatedData.supplierId,
      userId: validatedData.userId,
      totalCost: validatedData.totalCost
    }
  })
  return BaseRestockResult.parse(restock)
}
export const getRestockById = async (id: number): Promise<BaseRestockResultType> => {
  const restockById = await prisma.restock.findUnique({
    where: { id }
  })
  if (!restockById) {
    throw new Error('Restock not found')
  }
  return BaseRestockResult.parse(restockById)
}
export const getAllRestocks = async (): Promise<BaseRestockResultType[]> => {
  const restocks = await prisma.restock.findMany()
  return restocks.map((restock) => BaseRestockResult.parse(restock))
}
export const updateRestock = async (
  id: number,
  data: Partial<BaseRestockInputType>
): Promise<BaseRestockResultType> => {
  const validatedData = BaseRestockInput.partial().parse(data)
  const updatedRestock = await prisma.restock.update({
    where: { id },
    data: { ...validatedData }
  })
  return BaseRestockResult.parse(updatedRestock)
}
export const deleteRestock = async (id: number): Promise<void> => {
  await prisma.restock.delete({
    where: { id }
  })
}
