import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  customerId: z.literal(true).optional(),
  totalAmount: z.literal(true).optional()
}).strict();
export const BillSumAggregateInputObjectSchema: z.ZodType<Prisma.BillSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.BillSumAggregateInputType>;
export const BillSumAggregateInputObjectZodSchema = makeSchema();
