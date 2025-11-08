import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional()
}).strict();
export const UserSessionAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.UserSessionAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.UserSessionAvgOrderByAggregateInput>;
export const UserSessionAvgOrderByAggregateInputObjectZodSchema = makeSchema();
