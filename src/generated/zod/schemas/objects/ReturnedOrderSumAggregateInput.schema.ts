import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  billId: z.literal(true).optional(),
  itemId: z.literal(true).optional(),
  quantity: z.literal(true).optional()
}).strict();
export const ReturnedOrderSumAggregateInputObjectSchema: z.ZodType<Prisma.ReturnedOrderSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ReturnedOrderSumAggregateInputType>;
export const ReturnedOrderSumAggregateInputObjectZodSchema = makeSchema();
