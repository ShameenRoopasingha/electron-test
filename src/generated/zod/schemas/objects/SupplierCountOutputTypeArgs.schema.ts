import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SupplierCountOutputTypeSelectObjectSchema as SupplierCountOutputTypeSelectObjectSchema } from './SupplierCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => SupplierCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const SupplierCountOutputTypeArgsObjectSchema = makeSchema();
export const SupplierCountOutputTypeArgsObjectZodSchema = makeSchema();
