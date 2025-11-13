import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  itemId: SortOrderSchema.optional(),
  quantity: SortOrderSchema.optional(),
  expirationDate: SortOrderSchema.optional(),
  disposedBy: SortOrderSchema.optional(),
  reason: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional()
}).strict();
export const ExpiredItemCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ExpiredItemCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ExpiredItemCountOrderByAggregateInput>;
export const ExpiredItemCountOrderByAggregateInputObjectZodSchema = makeSchema();
