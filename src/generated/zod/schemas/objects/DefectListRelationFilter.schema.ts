import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { DefectWhereInputObjectSchema as DefectWhereInputObjectSchema } from './DefectWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => DefectWhereInputObjectSchema).optional(),
  some: z.lazy(() => DefectWhereInputObjectSchema).optional(),
  none: z.lazy(() => DefectWhereInputObjectSchema).optional()
}).strict();
export const DefectListRelationFilterObjectSchema: z.ZodType<Prisma.DefectListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.DefectListRelationFilter>;
export const DefectListRelationFilterObjectZodSchema = makeSchema();
