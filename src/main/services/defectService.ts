import { PrismaClient } from 'generated/prisma/client'
import { DefectInputSchema, DefectResultSchema } from '../../generated/zod/schemas' // Adjusted path
import { z } from 'zod'
const prisma = new PrismaClient()
export const BaseDefectInput = DefectInputSchema.omit({
  id: true,
  createdAt: true,
  item: true,
  reportedByUser: true
})
export type BaseDefectInputType = z.infer<typeof BaseDefectInput>
export const BaseDefectResult = DefectResultSchema.omit({
  item: true,
  reportedByUser: true
})
export type BaseDefectResultType = z.infer<typeof BaseDefectResult>
export const createDefect = async (data: BaseDefectInputType): Promise<BaseDefectResultType> => {
  const validatedData = BaseDefectInput.parse(data)
  const defect = await prisma.defect.create({
    data: {
      itemId: validatedData.itemId,
      quantity: validatedData.quantity,
      reason: validatedData.reason,
      reportedBy: validatedData.reportedBy
    }
  })
  return BaseDefectResult.parse(defect)
}
export const getDefectById = async (id: number): Promise<BaseDefectResultType> => {
  const defectById = await prisma.defect.findUnique({
    where: { id }
  })
  if (!defectById) {
    throw new Error('Defect not found')
  }
  return BaseDefectResult.parse(defectById)
}
export const getAllDefects = async (): Promise<BaseDefectResultType[]> => {
  const defects = await prisma.defect.findMany()
  return defects.map((defect) => BaseDefectResult.parse(defect))
}
export const updateDefect = async (
  id: number,
  data: Partial<BaseDefectInputType>
): Promise<BaseDefectResultType> => {
  const validatedData = BaseDefectInput.partial().parse(data)
  const updatedDefect = await prisma.defect.update({
    where: { id },
    data: { ...validatedData }
  })
  return BaseDefectResult.parse(updatedDefect)
}
export const deleteDefect = async (id: number): Promise<void> => {
  await prisma.defect.delete({
    where: { id }
  })
}
