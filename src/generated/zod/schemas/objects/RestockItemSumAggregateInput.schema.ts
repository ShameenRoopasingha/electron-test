import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  restockId: z.literal(true).optional(),
  itemId: z.literal(true).optional(),
  quantity: z.literal(true).optional(),
  costPrice: z.literal(true).optional()
}).strict();
export const RestockItemSumAggregateInputObjectSchema: z.ZodType<Prisma.RestockItemSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.RestockItemSumAggregateInputType>;
export const RestockItemSumAggregateInputObjectZodSchema = makeSchema();
