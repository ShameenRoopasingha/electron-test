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
export const DefectCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.DefectCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.DefectCountOrderByAggregateInput>;
export const DefectCountOrderByAggregateInputObjectZodSchema = makeSchema();
