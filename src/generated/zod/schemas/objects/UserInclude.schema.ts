import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { BillFindManySchema as BillFindManySchema } from '../findManyBill.schema';
import { UserSessionFindManySchema as UserSessionFindManySchema } from '../findManyUserSession.schema';
import { ExpiredItemFindManySchema as ExpiredItemFindManySchema } from '../findManyExpiredItem.schema';
import { UserCountOutputTypeArgsObjectSchema as UserCountOutputTypeArgsObjectSchema } from './UserCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  bills: z.union([z.boolean(), z.lazy(() => BillFindManySchema)]).optional(),
  sessions: z.union([z.boolean(), z.lazy(() => UserSessionFindManySchema)]).optional(),
  expiredItems: z.union([z.boolean(), z.lazy(() => ExpiredItemFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const UserIncludeObjectSchema: z.ZodType<Prisma.UserInclude> = makeSchema() as unknown as z.ZodType<Prisma.UserInclude>;
export const UserIncludeObjectZodSchema = makeSchema();
