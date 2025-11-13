import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SupplierSelectObjectSchema as SupplierSelectObjectSchema } from './SupplierSelect.schema';
import { SupplierIncludeObjectSchema as SupplierIncludeObjectSchema } from './SupplierInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => SupplierSelectObjectSchema).optional(),
  include: z.lazy(() => SupplierIncludeObjectSchema).optional()
}).strict();
export const SupplierArgsObjectSchema = makeSchema();
export const SupplierArgsObjectZodSchema = makeSchema();
