import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { DefectWhereInputObjectSchema as DefectWhereInputObjectSchema } from './DefectWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DefectWhereInputObjectSchema).optional()
}).strict();
export const UserCountOutputTypeCountDefectsArgsObjectSchema = makeSchema();
export const UserCountOutputTypeCountDefectsArgsObjectZodSchema = makeSchema();
