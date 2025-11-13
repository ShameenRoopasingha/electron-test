import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { DefectSelectObjectSchema as DefectSelectObjectSchema } from './objects/DefectSelect.schema';
import { DefectIncludeObjectSchema as DefectIncludeObjectSchema } from './objects/DefectInclude.schema';
import { DefectUpdateInputObjectSchema as DefectUpdateInputObjectSchema } from './objects/DefectUpdateInput.schema';
import { DefectUncheckedUpdateInputObjectSchema as DefectUncheckedUpdateInputObjectSchema } from './objects/DefectUncheckedUpdateInput.schema';
import { DefectWhereUniqueInputObjectSchema as DefectWhereUniqueInputObjectSchema } from './objects/DefectWhereUniqueInput.schema';

export const DefectUpdateOneSchema: z.ZodType<Prisma.DefectUpdateArgs> = z.object({ select: DefectSelectObjectSchema.optional(), include: DefectIncludeObjectSchema.optional(), data: z.union([DefectUpdateInputObjectSchema, DefectUncheckedUpdateInputObjectSchema]), where: DefectWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.DefectUpdateArgs>;

export const DefectUpdateOneZodSchema = z.object({ select: DefectSelectObjectSchema.optional(), include: DefectIncludeObjectSchema.optional(), data: z.union([DefectUpdateInputObjectSchema, DefectUncheckedUpdateInputObjectSchema]), where: DefectWhereUniqueInputObjectSchema }).strict();