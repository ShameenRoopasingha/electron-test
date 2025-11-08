import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  billId: z.number().int().optional().nullable(),
  quantity: z.number().int(),
  reason: z.string(),
  createdAt: z.coerce.date().optional()
}).strict();
export const ReturnedOrderCreateManyItemInputObjectSchema: z.ZodType<Prisma.ReturnedOrderCreateManyItemInput> = makeSchema() as unknown as z.ZodType<Prisma.ReturnedOrderCreateManyItemInput>;
export const ReturnedOrderCreateManyItemInputObjectZodSchema = makeSchema();
