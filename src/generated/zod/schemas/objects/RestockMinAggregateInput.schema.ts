import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  supplierId: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  totalCost: z.literal(true).optional(),
  createdAt: z.literal(true).optional()
}).strict();
export const RestockMinAggregateInputObjectSchema: z.ZodType<Prisma.RestockMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.RestockMinAggregateInputType>;
export const RestockMinAggregateInputObjectZodSchema = makeSchema();
