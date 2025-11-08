import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const DefectOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.DefectOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.DefectOrderByRelationAggregateInput>;
export const DefectOrderByRelationAggregateInputObjectZodSchema = makeSchema();
