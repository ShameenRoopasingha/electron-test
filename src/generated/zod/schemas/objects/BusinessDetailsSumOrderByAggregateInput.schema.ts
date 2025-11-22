import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  ownerId: SortOrderSchema.optional()
}).strict();
export const BusinessDetailsSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.BusinessDetailsSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.BusinessDetailsSumOrderByAggregateInput>;
export const BusinessDetailsSumOrderByAggregateInputObjectZodSchema = makeSchema();
