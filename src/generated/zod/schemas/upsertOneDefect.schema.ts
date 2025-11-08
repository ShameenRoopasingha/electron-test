import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { DefectSelectObjectSchema as DefectSelectObjectSchema } from './objects/DefectSelect.schema';
import { DefectIncludeObjectSchema as DefectIncludeObjectSchema } from './objects/DefectInclude.schema';
import { DefectWhereUniqueInputObjectSchema as DefectWhereUniqueInputObjectSchema } from './objects/DefectWhereUniqueInput.schema';
import { DefectCreateInputObjectSchema as DefectCreateInputObjectSchema } from './objects/DefectCreateInput.schema';
import { DefectUncheckedCreateInputObjectSchema as DefectUncheckedCreateInputObjectSchema } from './objects/DefectUncheckedCreateInput.schema';
import { DefectUpdateInputObjectSchema as DefectUpdateInputObjectSchema } from './objects/DefectUpdateInput.schema';
import { DefectUncheckedUpdateInputObjectSchema as DefectUncheckedUpdateInputObjectSchema } from './objects/DefectUncheckedUpdateInput.schema';

export const DefectUpsertOneSchema: z.ZodType<Prisma.DefectUpsertArgs> = z.object({ select: DefectSelectObjectSchema.optional(), include: DefectIncludeObjectSchema.optional(), where: DefectWhereUniqueInputObjectSchema, create: z.union([ DefectCreateInputObjectSchema, DefectUncheckedCreateInputObjectSchema ]), update: z.union([ DefectUpdateInputObjectSchema, DefectUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.DefectUpsertArgs>;

export const DefectUpsertOneZodSchema = z.object({ select: DefectSelectObjectSchema.optional(), include: DefectIncludeObjectSchema.optional(), where: DefectWhereUniqueInputObjectSchema, create: z.union([ DefectCreateInputObjectSchema, DefectUncheckedCreateInputObjectSchema ]), update: z.union([ DefectUpdateInputObjectSchema, DefectUncheckedUpdateInputObjectSchema ]) }).strict();