import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ExpiredItemWhereInputObjectSchema as ExpiredItemWhereInputObjectSchema } from './ExpiredItemWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ExpiredItemWhereInputObjectSchema).optional()
}).strict();
export const UserCountOutputTypeCountExpiredItemsArgsObjectSchema = makeSchema();
export const UserCountOutputTypeCountExpiredItemsArgsObjectZodSchema = makeSchema();
