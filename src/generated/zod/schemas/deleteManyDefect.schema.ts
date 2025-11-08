import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { DefectWhereInputObjectSchema as DefectWhereInputObjectSchema } from './objects/DefectWhereInput.schema';

export const DefectDeleteManySchema: z.ZodType<Prisma.DefectDeleteManyArgs> = z.object({ where: DefectWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.DefectDeleteManyArgs>;

export const DefectDeleteManyZodSchema = z.object({ where: DefectWhereInputObjectSchema.optional() }).strict();