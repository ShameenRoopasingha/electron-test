import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  itemId: SortOrderSchema.optional(),
  quantity: SortOrderSchema.optional(),
  reason: SortOrderSchema.optional(),
  reportedBy: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional()
}).strict();
export const DefectMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.DefectMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.DefectMaxOrderByAggregateInput>;
export const DefectMaxOrderByAggregateInputObjectZodSchema = makeSchema();
