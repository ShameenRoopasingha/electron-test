import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  categoryId: z.literal(true).optional(),
  supplierId: z.literal(true).optional(),
  costPrice: z.literal(true).optional(),
  sellingPrice: z.literal(true).optional(),
  quantityInStock: z.literal(true).optional(),
  reorder_level: z.literal(true).optional()
}).strict();
export const ItemAvgAggregateInputObjectSchema: z.ZodType<Prisma.ItemAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ItemAvgAggregateInputType>;
export const ItemAvgAggregateInputObjectZodSchema = makeSchema();
