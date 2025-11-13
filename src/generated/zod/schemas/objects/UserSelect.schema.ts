import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { BillFindManySchema as BillFindManySchema } from '../findManyBill.schema';
import { UserSessionFindManySchema as UserSessionFindManySchema } from '../findManyUserSession.schema';
import { ExpiredItemFindManySchema as ExpiredItemFindManySchema } from '../findManyExpiredItem.schema';
import { UserCountOutputTypeArgsObjectSchema as UserCountOutputTypeArgsObjectSchema } from './UserCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  username: z.boolean().optional(),
  email: z.boolean().optional(),
  password: z.boolean().optional(),
  role: z.boolean().optional(),
  fname: z.boolean().optional(),
  lname: z.boolean().optional(),
  phone: z.boolean().optional(),
  address: z.boolean().optional(),
  bank_account: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  bills: z.union([z.boolean(), z.lazy(() => BillFindManySchema)]).optional(),
  sessions: z.union([z.boolean(), z.lazy(() => UserSessionFindManySchema)]).optional(),
  expiredItems: z.union([z.boolean(), z.lazy(() => ExpiredItemFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const UserSelectObjectSchema: z.ZodType<Prisma.UserSelect> = makeSchema() as unknown as z.ZodType<Prisma.UserSelect>;
export const UserSelectObjectZodSchema = makeSchema();
