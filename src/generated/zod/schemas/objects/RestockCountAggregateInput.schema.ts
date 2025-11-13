import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  supplierId: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  totalCost: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const RestockCountAggregateInputObjectSchema: z.ZodType<Prisma.RestockCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.RestockCountAggregateInputType>;
export const RestockCountAggregateInputObjectZodSchema = makeSchema();
