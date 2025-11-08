import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  supplierId: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  totalCost: z.literal(true).optional(),
  createdAt: z.literal(true).optional()
}).strict();
export const RestockMaxAggregateInputObjectSchema: z.ZodType<Prisma.RestockMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.RestockMaxAggregateInputType>;
export const RestockMaxAggregateInputObjectZodSchema = makeSchema();
