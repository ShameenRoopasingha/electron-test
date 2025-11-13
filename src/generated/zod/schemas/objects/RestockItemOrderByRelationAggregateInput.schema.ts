import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const RestockItemOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.RestockItemOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.RestockItemOrderByRelationAggregateInput>;
export const RestockItemOrderByRelationAggregateInputObjectZodSchema = makeSchema();
