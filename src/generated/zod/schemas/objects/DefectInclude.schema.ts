import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ItemArgsObjectSchema as ItemArgsObjectSchema } from './ItemArgs.schema'

const makeSchema = () => z.object({
  item: z.union([z.boolean(), z.lazy(() => ItemArgsObjectSchema)]).optional()
}).strict();
export const DefectIncludeObjectSchema: z.ZodType<Prisma.DefectInclude> = makeSchema() as unknown as z.ZodType<Prisma.DefectInclude>;
export const DefectIncludeObjectZodSchema = makeSchema();
