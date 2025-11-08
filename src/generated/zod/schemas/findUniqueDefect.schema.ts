import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { DefectSelectObjectSchema as DefectSelectObjectSchema } from './objects/DefectSelect.schema';
import { DefectIncludeObjectSchema as DefectIncludeObjectSchema } from './objects/DefectInclude.schema';
import { DefectWhereUniqueInputObjectSchema as DefectWhereUniqueInputObjectSchema } from './objects/DefectWhereUniqueInput.schema';

export const DefectFindUniqueSchema: z.ZodType<Prisma.DefectFindUniqueArgs> = z.object({ select: DefectSelectObjectSchema.optional(), include: DefectIncludeObjectSchema.optional(), where: DefectWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.DefectFindUniqueArgs>;

export const DefectFindUniqueZodSchema = z.object({ select: DefectSelectObjectSchema.optional(), include: DefectIncludeObjectSchema.optional(), where: DefectWhereUniqueInputObjectSchema }).strict();