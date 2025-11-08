import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  itemId: SortOrderSchema.optional(),
  quantity: SortOrderSchema.optional(),
  reportedBy: SortOrderSchema.optional()
}).strict();
export const DefectSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.DefectSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.DefectSumOrderByAggregateInput>;
export const DefectSumOrderByAggregateInputObjectZodSchema = makeSchema();
