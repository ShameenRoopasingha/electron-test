import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ItemArgsObjectSchema as ItemArgsObjectSchema } from './ItemArgs.schema';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  itemId: z.boolean().optional(),
  quantity: z.boolean().optional(),
  expirationDate: z.boolean().optional(),
  disposedBy: z.boolean().optional(),
  reason: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  item: z.union([z.boolean(), z.lazy(() => ItemArgsObjectSchema)]).optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional()
}).strict();
export const ExpiredItemSelectObjectSchema: z.ZodType<Prisma.ExpiredItemSelect> = makeSchema() as unknown as z.ZodType<Prisma.ExpiredItemSelect>;
export const ExpiredItemSelectObjectZodSchema = makeSchema();
