import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  billId: z.literal(true).optional(),
  itemId: z.literal(true).optional(),
  quantity: z.literal(true).optional(),
  price: z.literal(true).optional(),
  payedAmount: z.literal(true).optional()
}).strict();
export const CheckoutAvgAggregateInputObjectSchema: z.ZodType<Prisma.CheckoutAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CheckoutAvgAggregateInputType>;
export const CheckoutAvgAggregateInputObjectZodSchema = makeSchema();
