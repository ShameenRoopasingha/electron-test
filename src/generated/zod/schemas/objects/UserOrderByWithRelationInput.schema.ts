import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { BillOrderByRelationAggregateInputObjectSchema as BillOrderByRelationAggregateInputObjectSchema } from './BillOrderByRelationAggregateInput.schema';
import { UserSessionOrderByRelationAggregateInputObjectSchema as UserSessionOrderByRelationAggregateInputObjectSchema } from './UserSessionOrderByRelationAggregateInput.schema';
import { ExpiredItemOrderByRelationAggregateInputObjectSchema as ExpiredItemOrderByRelationAggregateInputObjectSchema } from './ExpiredItemOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  username: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  password: SortOrderSchema.optional(),
  role: SortOrderSchema.optional(),
  fname: SortOrderSchema.optional(),
  lname: SortOrderSchema.optional(),
  phone: SortOrderSchema.optional(),
  address: SortOrderSchema.optional(),
  bank_account: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  bills: z.lazy(() => BillOrderByRelationAggregateInputObjectSchema).optional(),
  sessions: z.lazy(() => UserSessionOrderByRelationAggregateInputObjectSchema).optional(),
  expiredItems: z.lazy(() => ExpiredItemOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const UserOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.UserOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.UserOrderByWithRelationInput>;
export const UserOrderByWithRelationInputObjectZodSchema = makeSchema();
