import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  ownerId: SortOrderSchema.optional()
}).strict();
export const BusinessDetailsAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.BusinessDetailsAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.BusinessDetailsAvgOrderByAggregateInput>;
export const BusinessDetailsAvgOrderByAggregateInputObjectZodSchema = makeSchema();
