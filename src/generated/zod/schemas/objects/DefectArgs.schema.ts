import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { DefectSelectObjectSchema as DefectSelectObjectSchema } from './DefectSelect.schema';
import { DefectIncludeObjectSchema as DefectIncludeObjectSchema } from './DefectInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => DefectSelectObjectSchema).optional(),
  include: z.lazy(() => DefectIncludeObjectSchema).optional()
}).strict();
export const DefectArgsObjectSchema = makeSchema();
export const DefectArgsObjectZodSchema = makeSchema();
