import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  restockId: SortOrderSchema.optional(),
  itemId: SortOrderSchema.optional(),
  quantity: SortOrderSchema.optional(),
  costPrice: SortOrderSchema.optional()
}).strict();
export const RestockItemMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.RestockItemMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.RestockItemMaxOrderByAggregateInput>;
export const RestockItemMaxOrderByAggregateInputObjectZodSchema = makeSchema();
