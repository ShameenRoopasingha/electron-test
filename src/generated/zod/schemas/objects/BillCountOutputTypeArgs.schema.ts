import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { BillCountOutputTypeSelectObjectSchema as BillCountOutputTypeSelectObjectSchema } from './BillCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => BillCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const BillCountOutputTypeArgsObjectSchema = makeSchema();
export const BillCountOutputTypeArgsObjectZodSchema = makeSchema();
