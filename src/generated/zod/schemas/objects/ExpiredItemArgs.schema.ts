import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ExpiredItemSelectObjectSchema as ExpiredItemSelectObjectSchema } from './ExpiredItemSelect.schema';
import { ExpiredItemIncludeObjectSchema as ExpiredItemIncludeObjectSchema } from './ExpiredItemInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ExpiredItemSelectObjectSchema).optional(),
  include: z.lazy(() => ExpiredItemIncludeObjectSchema).optional()
}).strict();
export const ExpiredItemArgsObjectSchema = makeSchema();
export const ExpiredItemArgsObjectZodSchema = makeSchema();
