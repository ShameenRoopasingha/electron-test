import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  itemId: z.literal(true).optional(),
  quantity: z.literal(true).optional(),
  disposedBy: z.literal(true).optional()
}).strict();
export const ExpiredItemAvgAggregateInputObjectSchema: z.ZodType<Prisma.ExpiredItemAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ExpiredItemAvgAggregateInputType>;
export const ExpiredItemAvgAggregateInputObjectZodSchema = makeSchema();
