import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  token: SortOrderSchema.optional(),
  ipAddress: SortOrderSchema.optional(),
  deviceInfo: SortOrderSchema.optional(),
  loginTime: SortOrderSchema.optional(),
  logoutTime: SortOrderSchema.optional(),
  isActive: SortOrderSchema.optional()
}).strict();
export const UserSessionMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.UserSessionMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.UserSessionMaxOrderByAggregateInput>;
export const UserSessionMaxOrderByAggregateInputObjectZodSchema = makeSchema();
