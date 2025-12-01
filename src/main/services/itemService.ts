import { getPrisma } from '../../../lib/utils'
import { ItemInputSchema, ItemResultSchema } from '../../generated/zod/schemas' // Adjusted path
import { z } from 'zod'
import { validate } from '../../../lib/validate'

const prisma = getPrisma()

export const BaseItemResult = ItemResultSchema.omit({
  category: true,
  supplier: true,
  checkouts: true,
  returnedOrders: true,
  defects: true,
  expiredItems: true,
  restockItems: true
})
export type BaseItemResultType = z.infer<typeof BaseItemResult>

export const BaseItemInput = ItemInputSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  category: true,
  supplier: true,
  checkouts: true,
  returnedOrders: true,
  defects: true,
  expiredItems: true,
  restockItems: true
})
export type BaseItemInputType = z.infer<typeof BaseItemInput>

export const createItem = async (data: BaseItemInputType): Promise<BaseItemResultType> => {
  const validatedData = validate(BaseItemInput, data)
  const item = await prisma.item.create({
    data: {
      name: validatedData.name,
      categoryId: validatedData.categoryId,
      manufacturer: validatedData.manufacturer,
      supplierId: validatedData.supplierId,
      barcode: validatedData.barcode,
      costPrice: validatedData.costPrice,
      sellingPrice: validatedData.sellingPrice,
      quantityInStock: validatedData.quantityInStock,
      reorder_level: validatedData.reorder_level
    }
  })
  return BaseItemResult.parse(item)
}

export const getItemById = async (id: number): Promise<BaseItemResultType> => {
  const itemById = await prisma.item.findUnique({
    where: { id }
  })
  if (!itemById) {
    throw new Error('Item not found')
  }
  return BaseItemResult.parse(itemById)
}

export const getAllItems = async (): Promise<BaseItemResultType[]> => {
  const items = await prisma.item.findMany()

  const parsedItems = items.map((i) => {
    const parsed = BaseItemResult.safeParse(i)
    if (!parsed.success) {
      console.error('Invalid Item', z.treeifyError(parsed.error))
      throw new Error('Invalid item format from database')
    }
    return parsed.data
  })
  return parsedItems
};

export const updateItem = async (
  id: number,
  data: Partial<BaseItemInputType>
): Promise<BaseItemResultType> => {
  const validatedData = BaseItemInput.partial().parse(data)
  const updatedItem = await prisma.item.update({
    where: { id },
    data: { ...validatedData }
  })

  return BaseItemResult.parse(updatedItem)
}

export const deleteItem = async (id: number): Promise<void> => {
  await prisma.item.delete({
    where: { id }
  })
}
