import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const ItemOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.ItemOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ItemOrderByRelationAggregateInput>;
export const ItemOrderByRelationAggregateInputObjectZodSchema = makeSchema();
