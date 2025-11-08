import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { BillSelectObjectSchema as BillSelectObjectSchema } from './objects/BillSelect.schema';
import { BillIncludeObjectSchema as BillIncludeObjectSchema } from './objects/BillInclude.schema';
import { BillCreateInputObjectSchema as BillCreateInputObjectSchema } from './objects/BillCreateInput.schema';
import { BillUncheckedCreateInputObjectSchema as BillUncheckedCreateInputObjectSchema } from './objects/BillUncheckedCreateInput.schema';

export const BillCreateOneSchema: z.ZodType<Prisma.BillCreateArgs> = z.object({ select: BillSelectObjectSchema.optional(), include: BillIncludeObjectSchema.optional(), data: z.union([BillCreateInputObjectSchema, BillUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.BillCreateArgs>;

export const BillCreateOneZodSchema = z.object({ select: BillSelectObjectSchema.optional(), include: BillIncludeObjectSchema.optional(), data: z.union([BillCreateInputObjectSchema, BillUncheckedCreateInputObjectSchema]) }).strict();