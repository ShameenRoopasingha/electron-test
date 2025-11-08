import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  itemId: z.literal(true).optional(),
  quantity: z.literal(true).optional(),
  reason: z.literal(true).optional(),
  reportedBy: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const DefectCountAggregateInputObjectSchema: z.ZodType<Prisma.DefectCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DefectCountAggregateInputType>;
export const DefectCountAggregateInputObjectZodSchema = makeSchema();
