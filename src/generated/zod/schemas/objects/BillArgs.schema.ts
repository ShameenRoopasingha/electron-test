import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { BillSelectObjectSchema as BillSelectObjectSchema } from './BillSelect.schema';
import { BillIncludeObjectSchema as BillIncludeObjectSchema } from './BillInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => BillSelectObjectSchema).optional(),
  include: z.lazy(() => BillIncludeObjectSchema).optional()
}).strict();
export const BillArgsObjectSchema = makeSchema();
export const BillArgsObjectZodSchema = makeSchema();
