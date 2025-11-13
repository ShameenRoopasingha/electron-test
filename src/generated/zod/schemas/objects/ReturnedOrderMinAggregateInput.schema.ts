import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  billId: z.literal(true).optional(),
  itemId: z.literal(true).optional(),
  quantity: z.literal(true).optional(),
  reason: z.literal(true).optional(),
  createdAt: z.literal(true).optional()
}).strict();
export const ReturnedOrderMinAggregateInputObjectSchema: z.ZodType<Prisma.ReturnedOrderMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ReturnedOrderMinAggregateInputType>;
export const ReturnedOrderMinAggregateInputObjectZodSchema = makeSchema();
