import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  itemId: z.number().int().optional().nullable(),
  quantity: z.number().int(),
  reason: z.string(),
  createdAt: z.coerce.date().optional()
}).strict();
export const ReturnedOrderUncheckedCreateWithoutBillInputObjectSchema: z.ZodType<Prisma.ReturnedOrderUncheckedCreateWithoutBillInput> = makeSchema() as unknown as z.ZodType<Prisma.ReturnedOrderUncheckedCreateWithoutBillInput>;
export const ReturnedOrderUncheckedCreateWithoutBillInputObjectZodSchema = makeSchema();
