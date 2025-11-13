import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  customerId: z.literal(true).optional(),
  totalAmount: z.literal(true).optional(),
  paymentMethod: z.literal(true).optional(),
  paymentStatus: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const BillCountAggregateInputObjectSchema: z.ZodType<Prisma.BillCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.BillCountAggregateInputType>;
export const BillCountAggregateInputObjectZodSchema = makeSchema();
