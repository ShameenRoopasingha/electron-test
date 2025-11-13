import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  billId: z.number().int().optional().nullable(),
  itemId: z.number().int().optional().nullable(),
  quantity: z.number().int(),
  reason: z.string(),
  createdAt: z.coerce.date().optional()
}).strict();
export const ReturnedOrderCreateManyInputObjectSchema: z.ZodType<Prisma.ReturnedOrderCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.ReturnedOrderCreateManyInput>;
export const ReturnedOrderCreateManyInputObjectZodSchema = makeSchema();
