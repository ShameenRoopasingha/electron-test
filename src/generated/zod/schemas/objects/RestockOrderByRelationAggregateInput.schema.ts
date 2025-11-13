import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const RestockOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.RestockOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.RestockOrderByRelationAggregateInput>;
export const RestockOrderByRelationAggregateInputObjectZodSchema = makeSchema();
