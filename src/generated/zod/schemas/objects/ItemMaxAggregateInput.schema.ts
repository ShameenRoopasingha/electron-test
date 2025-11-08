import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  categoryId: z.literal(true).optional(),
  supplierId: z.literal(true).optional(),
  barcode: z.literal(true).optional(),
  costPrice: z.literal(true).optional(),
  sellingPrice: z.literal(true).optional(),
  quantityInStock: z.literal(true).optional(),
  reorder_level: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const ItemMaxAggregateInputObjectSchema: z.ZodType<Prisma.ItemMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ItemMaxAggregateInputType>;
export const ItemMaxAggregateInputObjectZodSchema = makeSchema();
