import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  itemId: z.literal(true).optional(),
  quantity: z.literal(true).optional(),
  expirationDate: z.literal(true).optional(),
  disposedBy: z.literal(true).optional(),
  reason: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const ExpiredItemCountAggregateInputObjectSchema: z.ZodType<Prisma.ExpiredItemCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ExpiredItemCountAggregateInputType>;
export const ExpiredItemCountAggregateInputObjectZodSchema = makeSchema();
