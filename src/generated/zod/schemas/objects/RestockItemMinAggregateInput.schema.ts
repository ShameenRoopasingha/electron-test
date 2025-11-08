import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  restockId: z.literal(true).optional(),
  itemId: z.literal(true).optional(),
  quantity: z.literal(true).optional(),
  costPrice: z.literal(true).optional()
}).strict();
export const RestockItemMinAggregateInputObjectSchema: z.ZodType<Prisma.RestockItemMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.RestockItemMinAggregateInputType>;
export const RestockItemMinAggregateInputObjectZodSchema = makeSchema();
