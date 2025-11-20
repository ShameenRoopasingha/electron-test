import { validate } from '../../../lib/validate'
import { getPrisma } from '../../../lib/utils'
import { RestockItemInputSchema, RestockItemResultSchema } from '../../generated/zod/schemas' // Adjusted path
import { z } from 'zod'
const prisma = getPrisma()
export const BaseRestockItemInput = RestockItemInputSchema.omit({
  id: true,
  restock: true,
  item: true
})
export type BaseRestockItemInputType = z.infer<typeof BaseRestockItemInput>
export const BaseRestockItemResult = RestockItemResultSchema.omit({
  restock: true,
  item: true
})
export type BaseRestockItemResultType = z.infer<typeof BaseRestockItemResult>
export const createRestockItem = async (
  data: BaseRestockItemInputType
): Promise<BaseRestockItemResultType> => {
  const validatedData = validate(BaseRestockItemInput, data)
  const restockItem = await prisma.restockItem.create({
    data: {
      restockId: validatedData.restockId,
      itemId: validatedData.itemId,
      quantity: validatedData.quantity,
      costPrice: validatedData.costPrice
    }
  })
  return BaseRestockItemResult.parse(restockItem)
}
export const getRestockItemById = async (id: number): Promise<BaseRestockItemResultType> => {
  const restockItemById = await prisma.restockItem.findUnique({
    where: { id }
  })
  if (!restockItemById) {
    throw new Error('RestockItem not found')
  }
  return BaseRestockItemResult.parse(restockItemById)
}
export const getAllRestockItems = async (): Promise<BaseRestockItemResultType[]> => {
  const restockItems = await prisma.restockItem.findMany()
  return restockItems.map((restockItem) => BaseRestockItemResult.parse(restockItem))
}
export const updateRestockItem = async (
  id: number,
  data: Partial<BaseRestockItemInputType>
): Promise<BaseRestockItemResultType> => {
  const validatedData = BaseRestockItemInput.partial().parse(data)
  const updatedRestockItem = await prisma.restockItem.update({
    where: { id },
    data: { ...validatedData }
  })
  return BaseRestockItemResult.parse(updatedRestockItem)
}
export const deleteRestockItem = async (id: number): Promise<void> => {
  await prisma.restockItem.delete({
    where: { id }
  })
}
