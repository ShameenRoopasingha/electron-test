import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { BillSelectObjectSchema as BillSelectObjectSchema } from './objects/BillSelect.schema';
import { BillIncludeObjectSchema as BillIncludeObjectSchema } from './objects/BillInclude.schema';
import { BillWhereUniqueInputObjectSchema as BillWhereUniqueInputObjectSchema } from './objects/BillWhereUniqueInput.schema';

export const BillDeleteOneSchema: z.ZodType<Prisma.BillDeleteArgs> = z.object({ select: BillSelectObjectSchema.optional(), include: BillIncludeObjectSchema.optional(), where: BillWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.BillDeleteArgs>;

export const BillDeleteOneZodSchema = z.object({ select: BillSelectObjectSchema.optional(), include: BillIncludeObjectSchema.optional(), where: BillWhereUniqueInputObjectSchema }).strict();