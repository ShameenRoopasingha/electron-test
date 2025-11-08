import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ItemArgsObjectSchema as ItemArgsObjectSchema } from './ItemArgs.schema';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema'

const makeSchema = () => z.object({
  item: z.union([z.boolean(), z.lazy(() => ItemArgsObjectSchema)]).optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional()
}).strict();
export const ExpiredItemIncludeObjectSchema: z.ZodType<Prisma.ExpiredItemInclude> = makeSchema() as unknown as z.ZodType<Prisma.ExpiredItemInclude>;
export const ExpiredItemIncludeObjectZodSchema = makeSchema();
