import { validate } from '../../../lib/validate'
import { getPrisma } from '../../../lib/utils'
import { RestockInputSchema, RestockResultSchema } from '../../generated/zod/schemas'
import { z } from 'zod'

const prisma = getPrisma()

/* ──────────────────────────────────────────────
 * SCHEMAS (Base input + output)
 * Omit relations & auto fields
 * ────────────────────────────────────────────── */

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

/* ──────────────────────────────────────────────
 * CREATE
 * ────────────────────────────────────────────── */

export const createRestock = async (data: BaseRestockInputType): Promise<BaseRestockResultType> => {
  const validated = validate(BaseRestockInput, data)

  const restock = await prisma.restock.create({
    data: {
      supplierId: validated.supplierId,
      userId: validated.userId,
      totalCost: validated.totalCost
    }
  })

  return BaseRestockResult.parse(restock)
}

/* ──────────────────────────────────────────────
 * GET BY ID
 * ────────────────────────────────────────────── */

export const getRestockById = async (id: number): Promise<BaseRestockResultType> => {
  const restock = await prisma.restock.findUnique({
    where: { id }
  })

  if (!restock) {
    throw new Error('Restock not found')
  }

  return BaseRestockResult.parse(restock)
}

/* ──────────────────────────────────────────────
 * GET ALL
 * ────────────────────────────────────────────── */

export const getAllRestocks = async (): Promise<BaseRestockResultType[]> => {
  const restocks = await prisma.restock.findMany({
    orderBy: { id: 'desc' }
  })

  return restocks.map((r) => BaseRestockResult.parse(r))
}

/* ──────────────────────────────────────────────
 * UPDATE (safe partial update)
 * ────────────────────────────────────────────── */

export const updateRestock = async (
  id: number,
  data: Partial<BaseRestockInputType>
): Promise<BaseRestockResultType> => {
  const validated = BaseRestockInput.partial().parse(data)

  const updated = await prisma.restock.update({
    where: { id },
    data: validated
  })

  return BaseRestockResult.parse(updated)
}

/* ──────────────────────────────────────────────
 * DELETE
 * ────────────────────────────────────────────── */

export const deleteRestock = async (id: number): Promise<{ id: number }> => {
  await prisma.restock.delete({
    where: { id }
  })

  return { id }
}
