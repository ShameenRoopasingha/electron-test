import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  billId: z.literal(true).optional(),
  itemId: z.literal(true).optional(),
  quantity: z.literal(true).optional()
}).strict();
export const ReturnedOrderAvgAggregateInputObjectSchema: z.ZodType<Prisma.ReturnedOrderAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ReturnedOrderAvgAggregateInputType>;
export const ReturnedOrderAvgAggregateInputObjectZodSchema = makeSchema();
