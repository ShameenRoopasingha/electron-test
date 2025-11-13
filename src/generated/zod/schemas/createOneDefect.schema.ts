import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { DefectSelectObjectSchema as DefectSelectObjectSchema } from './objects/DefectSelect.schema';
import { DefectIncludeObjectSchema as DefectIncludeObjectSchema } from './objects/DefectInclude.schema';
import { DefectCreateInputObjectSchema as DefectCreateInputObjectSchema } from './objects/DefectCreateInput.schema';
import { DefectUncheckedCreateInputObjectSchema as DefectUncheckedCreateInputObjectSchema } from './objects/DefectUncheckedCreateInput.schema';

export const DefectCreateOneSchema: z.ZodType<Prisma.DefectCreateArgs> = z.object({ select: DefectSelectObjectSchema.optional(), include: DefectIncludeObjectSchema.optional(), data: z.union([DefectCreateInputObjectSchema, DefectUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.DefectCreateArgs>;

export const DefectCreateOneZodSchema = z.object({ select: DefectSelectObjectSchema.optional(), include: DefectIncludeObjectSchema.optional(), data: z.union([DefectCreateInputObjectSchema, DefectUncheckedCreateInputObjectSchema]) }).strict();