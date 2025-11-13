import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  itemId: z.literal(true).optional(),
  quantity: z.literal(true).optional(),
  expirationDate: z.literal(true).optional(),
  disposedBy: z.literal(true).optional(),
  reason: z.literal(true).optional(),
  createdAt: z.literal(true).optional()
}).strict();
export const ExpiredItemMinAggregateInputObjectSchema: z.ZodType<Prisma.ExpiredItemMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ExpiredItemMinAggregateInputType>;
export const ExpiredItemMinAggregateInputObjectZodSchema = makeSchema();
