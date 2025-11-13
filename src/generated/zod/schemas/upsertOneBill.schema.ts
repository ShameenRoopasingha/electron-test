import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { BillSelectObjectSchema as BillSelectObjectSchema } from './objects/BillSelect.schema';
import { BillIncludeObjectSchema as BillIncludeObjectSchema } from './objects/BillInclude.schema';
import { BillWhereUniqueInputObjectSchema as BillWhereUniqueInputObjectSchema } from './objects/BillWhereUniqueInput.schema';
import { BillCreateInputObjectSchema as BillCreateInputObjectSchema } from './objects/BillCreateInput.schema';
import { BillUncheckedCreateInputObjectSchema as BillUncheckedCreateInputObjectSchema } from './objects/BillUncheckedCreateInput.schema';
import { BillUpdateInputObjectSchema as BillUpdateInputObjectSchema } from './objects/BillUpdateInput.schema';
import { BillUncheckedUpdateInputObjectSchema as BillUncheckedUpdateInputObjectSchema } from './objects/BillUncheckedUpdateInput.schema';

export const BillUpsertOneSchema: z.ZodType<Prisma.BillUpsertArgs> = z.object({ select: BillSelectObjectSchema.optional(), include: BillIncludeObjectSchema.optional(), where: BillWhereUniqueInputObjectSchema, create: z.union([ BillCreateInputObjectSchema, BillUncheckedCreateInputObjectSchema ]), update: z.union([ BillUpdateInputObjectSchema, BillUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.BillUpsertArgs>;

export const BillUpsertOneZodSchema = z.object({ select: BillSelectObjectSchema.optional(), include: BillIncludeObjectSchema.optional(), where: BillWhereUniqueInputObjectSchema, create: z.union([ BillCreateInputObjectSchema, BillUncheckedCreateInputObjectSchema ]), update: z.union([ BillUpdateInputObjectSchema, BillUncheckedUpdateInputObjectSchema ]) }).strict();