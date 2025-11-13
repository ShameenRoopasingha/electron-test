import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RestockCountOutputTypeSelectObjectSchema as RestockCountOutputTypeSelectObjectSchema } from './RestockCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => RestockCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const RestockCountOutputTypeArgsObjectSchema = makeSchema();
export const RestockCountOutputTypeArgsObjectZodSchema = makeSchema();
