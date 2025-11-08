import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { UserSessionCountOrderByAggregateInputObjectSchema as UserSessionCountOrderByAggregateInputObjectSchema } from './UserSessionCountOrderByAggregateInput.schema';
import { UserSessionAvgOrderByAggregateInputObjectSchema as UserSessionAvgOrderByAggregateInputObjectSchema } from './UserSessionAvgOrderByAggregateInput.schema';
import { UserSessionMaxOrderByAggregateInputObjectSchema as UserSessionMaxOrderByAggregateInputObjectSchema } from './UserSessionMaxOrderByAggregateInput.schema';
import { UserSessionMinOrderByAggregateInputObjectSchema as UserSessionMinOrderByAggregateInputObjectSchema } from './UserSessionMinOrderByAggregateInput.schema';
import { UserSessionSumOrderByAggregateInputObjectSchema as UserSessionSumOrderByAggregateInputObjectSchema } from './UserSessionSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  token: SortOrderSchema.optional(),
  ipAddress: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  deviceInfo: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  loginTime: SortOrderSchema.optional(),
  logoutTime: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  isActive: SortOrderSchema.optional(),
  _count: z.lazy(() => UserSessionCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => UserSessionAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => UserSessionMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => UserSessionMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => UserSessionSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const UserSessionOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.UserSessionOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.UserSessionOrderByWithAggregationInput>;
export const UserSessionOrderByWithAggregationInputObjectZodSchema = makeSchema();
