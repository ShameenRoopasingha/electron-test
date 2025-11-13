import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ItemCountOutputTypeSelectObjectSchema as ItemCountOutputTypeSelectObjectSchema } from './ItemCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ItemCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const ItemCountOutputTypeArgsObjectSchema = makeSchema();
export const ItemCountOutputTypeArgsObjectZodSchema = makeSchema();
