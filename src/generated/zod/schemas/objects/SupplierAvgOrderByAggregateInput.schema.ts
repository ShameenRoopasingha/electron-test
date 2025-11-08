import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional()
}).strict();
export const SupplierAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.SupplierAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.SupplierAvgOrderByAggregateInput>;
export const SupplierAvgOrderByAggregateInputObjectZodSchema = makeSchema();
