import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional()
}).strict();
export const UserSessionSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.UserSessionSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.UserSessionSumOrderByAggregateInput>;
export const UserSessionSumOrderByAggregateInputObjectZodSchema = makeSchema();
