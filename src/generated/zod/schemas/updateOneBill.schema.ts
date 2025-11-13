import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { BillSelectObjectSchema as BillSelectObjectSchema } from './objects/BillSelect.schema';
import { BillIncludeObjectSchema as BillIncludeObjectSchema } from './objects/BillInclude.schema';
import { BillUpdateInputObjectSchema as BillUpdateInputObjectSchema } from './objects/BillUpdateInput.schema';
import { BillUncheckedUpdateInputObjectSchema as BillUncheckedUpdateInputObjectSchema } from './objects/BillUncheckedUpdateInput.schema';
import { BillWhereUniqueInputObjectSchema as BillWhereUniqueInputObjectSchema } from './objects/BillWhereUniqueInput.schema';

export const BillUpdateOneSchema: z.ZodType<Prisma.BillUpdateArgs> = z.object({ select: BillSelectObjectSchema.optional(), include: BillIncludeObjectSchema.optional(), data: z.union([BillUpdateInputObjectSchema, BillUncheckedUpdateInputObjectSchema]), where: BillWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.BillUpdateArgs>;

export const BillUpdateOneZodSchema = z.object({ select: BillSelectObjectSchema.optional(), include: BillIncludeObjectSchema.optional(), data: z.union([BillUpdateInputObjectSchema, BillUncheckedUpdateInputObjectSchema]), where: BillWhereUniqueInputObjectSchema }).strict();