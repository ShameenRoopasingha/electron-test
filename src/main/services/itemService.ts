import { ItemInputSchema, ItemResultSchema } from '../../generated/zod/schemas' // Adjusted path
import { z } from 'zod'
import prisma from 'generated/prisma/client'

export const createItem = async (data: z.infer<typeof ItemInputSchema>) => {
  const validatedData = ItemInputSchema.parse(data)
  const item = await prisma.item.create({
    data: {
      name: validatedData.name,
      categoryId: validatedData.categoryId,
      supplierId: validatedData.supplierId,
      barcode: validatedData.barcode,
      costPrice: validatedData.costPrice,
      sellingPrice: validatedData.sellingPrice,
      quantityInStock: validatedData.quantityInStock,
      reorder_level: validatedData.reorder_level
    }
  })
  return ItemResultSchema.parse(item)
}

export const getItems = async () => {
  const items = await prisma.item.findMany({
    include: { category: true, supplier: true }
  })
  return items.map((item: z.infer<typeof ItemResultSchema>) => ItemResultSchema.parse(item))
}

export const updateItem = async (id: number, data: Partial<z.infer<typeof ItemInputSchema>>) => {
  const validatedData = ItemInputSchema.partial().parse(data)
  const item = await prisma.item.update({
    where: { id },
    data: validatedData
  })
  return ItemResultSchema.parse(item)
}

export const deleteItem = async (id: number) => {
  await prisma.item.delete({ where: { id } })
}
