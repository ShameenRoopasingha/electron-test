import { getPrisma } from '../../../lib/utils'
import { CategoryInputSchema, CategoryResultSchema } from '../../generated/zod/schemas' // Adjusted path
import { z } from 'zod'
import { validate } from '../../../lib/validate'
const prisma = getPrisma()
export const BaseCategoryInput = CategoryInputSchema.pick({
  name: true,
  description: true
})
export type BaseCategoryInputType = z.infer<typeof BaseCategoryInput>
export const BaseCategoryResult = CategoryResultSchema.pick({
  id: true,
  name: true,
  description: true
})
export type BaseCategoryResultType = z.infer<typeof BaseCategoryResult>
export const createCategory = async (
  data: BaseCategoryInputType
): Promise<BaseCategoryResultType> => {
  const validatedData = validate(BaseCategoryInput, data)
  const category = await prisma.category.create({
    data: {
      name: validatedData.name,
      description: validatedData.description
    }
  })
  return BaseCategoryResult.parse(category)
}
export const getCategoryById = async (id: number): Promise<BaseCategoryResultType> => {
  const categoryById = await prisma.category.findUnique({
    where: { id }
  })
  if (!categoryById) {
    throw new Error('Category not found')
  }
  return BaseCategoryResult.parse(categoryById)
}
export const getAllCategories = async (): Promise<BaseCategoryResultType[]> => {
  const categories = await prisma.category.findMany()
  return categories.map((category) => BaseCategoryResult.parse(category))
}
export const updateCategory = async (
  id: number,
  data: Partial<BaseCategoryInputType>
): Promise<BaseCategoryResultType> => {
  const validatedData = BaseCategoryInput.partial().parse(data)
  const updatedCategory = await prisma.category.update({
    where: { id },
    data: { ...validatedData }
  })
  return BaseCategoryResult.parse(updatedCategory)
}
export const deleteCategory = async (id: number): Promise<void> => {
  await prisma.category.delete({
    where: { id }
  })
}
