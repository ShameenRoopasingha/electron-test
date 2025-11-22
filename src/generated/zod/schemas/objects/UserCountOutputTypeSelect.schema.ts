import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserCountOutputTypeCountBillsArgsObjectSchema as UserCountOutputTypeCountBillsArgsObjectSchema } from './UserCountOutputTypeCountBillsArgs.schema';
import { UserCountOutputTypeCountSessionsArgsObjectSchema as UserCountOutputTypeCountSessionsArgsObjectSchema } from './UserCountOutputTypeCountSessionsArgs.schema';
import { UserCountOutputTypeCountExpiredItemsArgsObjectSchema as UserCountOutputTypeCountExpiredItemsArgsObjectSchema } from './UserCountOutputTypeCountExpiredItemsArgs.schema';
import { UserCountOutputTypeCountRestocksArgsObjectSchema as UserCountOutputTypeCountRestocksArgsObjectSchema } from './UserCountOutputTypeCountRestocksArgs.schema';
import { UserCountOutputTypeCountDefectsArgsObjectSchema as UserCountOutputTypeCountDefectsArgsObjectSchema } from './UserCountOutputTypeCountDefectsArgs.schema'

const makeSchema = () => z.object({
  bills: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountBillsArgsObjectSchema)]).optional(),
  sessions: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountSessionsArgsObjectSchema)]).optional(),
  expiredItems: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountExpiredItemsArgsObjectSchema)]).optional(),
  restocks: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountRestocksArgsObjectSchema)]).optional(),
  defects: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountDefectsArgsObjectSchema)]).optional()
}).strict();
export const UserCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.UserCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.UserCountOutputTypeSelect>;
export const UserCountOutputTypeSelectObjectZodSchema = makeSchema();
