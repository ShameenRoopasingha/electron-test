import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RestockItemSelectObjectSchema as RestockItemSelectObjectSchema } from './RestockItemSelect.schema';
import { RestockItemIncludeObjectSchema as RestockItemIncludeObjectSchema } from './RestockItemInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => RestockItemSelectObjectSchema).optional(),
  include: z.lazy(() => RestockItemIncludeObjectSchema).optional()
}).strict();
export const RestockItemArgsObjectSchema = makeSchema();
export const RestockItemArgsObjectZodSchema = makeSchema();
