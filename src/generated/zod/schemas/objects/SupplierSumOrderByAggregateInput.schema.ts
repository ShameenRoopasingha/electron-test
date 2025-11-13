import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional()
}).strict();
export const SupplierSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.SupplierSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.SupplierSumOrderByAggregateInput>;
export const SupplierSumOrderByAggregateInputObjectZodSchema = makeSchema();
