import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RestockSelectObjectSchema as RestockSelectObjectSchema } from './RestockSelect.schema';
import { RestockIncludeObjectSchema as RestockIncludeObjectSchema } from './RestockInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => RestockSelectObjectSchema).optional(),
  include: z.lazy(() => RestockIncludeObjectSchema).optional()
}).strict();
export const RestockArgsObjectSchema = makeSchema();
export const RestockArgsObjectZodSchema = makeSchema();
