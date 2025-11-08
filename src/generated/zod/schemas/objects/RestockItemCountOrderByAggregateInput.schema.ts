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
export const RestockItemCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.RestockItemCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.RestockItemCountOrderByAggregateInput>;
export const RestockItemCountOrderByAggregateInputObjectZodSchema = makeSchema();
