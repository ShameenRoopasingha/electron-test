import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const BillOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.BillOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.BillOrderByRelationAggregateInput>;
export const BillOrderByRelationAggregateInputObjectZodSchema = makeSchema();
