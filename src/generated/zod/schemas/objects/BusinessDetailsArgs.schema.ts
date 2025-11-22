import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { BusinessDetailsSelectObjectSchema as BusinessDetailsSelectObjectSchema } from './BusinessDetailsSelect.schema';
import { BusinessDetailsIncludeObjectSchema as BusinessDetailsIncludeObjectSchema } from './BusinessDetailsInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => BusinessDetailsSelectObjectSchema).optional(),
  include: z.lazy(() => BusinessDetailsIncludeObjectSchema).optional()
}).strict();
export const BusinessDetailsArgsObjectSchema = makeSchema();
export const BusinessDetailsArgsObjectZodSchema = makeSchema();
