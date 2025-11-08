import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { CheckoutSelectObjectSchema as CheckoutSelectObjectSchema } from './objects/CheckoutSelect.schema';
import { CheckoutIncludeObjectSchema as CheckoutIncludeObjectSchema } from './objects/CheckoutInclude.schema';
import { CheckoutWhereUniqueInputObjectSchema as CheckoutWhereUniqueInputObjectSchema } from './objects/CheckoutWhereUniqueInput.schema';
import { CheckoutCreateInputObjectSchema as CheckoutCreateInputObjectSchema } from './objects/CheckoutCreateInput.schema';
import { CheckoutUncheckedCreateInputObjectSchema as CheckoutUncheckedCreateInputObjectSchema } from './objects/CheckoutUncheckedCreateInput.schema';
import { CheckoutUpdateInputObjectSchema as CheckoutUpdateInputObjectSchema } from './objects/CheckoutUpdateInput.schema';
import { CheckoutUncheckedUpdateInputObjectSchema as CheckoutUncheckedUpdateInputObjectSchema } from './objects/CheckoutUncheckedUpdateInput.schema';

export const CheckoutUpsertOneSchema: z.ZodType<Prisma.CheckoutUpsertArgs> = z.object({ select: CheckoutSelectObjectSchema.optional(), include: CheckoutIncludeObjectSchema.optional(), where: CheckoutWhereUniqueInputObjectSchema, create: z.union([ CheckoutCreateInputObjectSchema, CheckoutUncheckedCreateInputObjectSchema ]), update: z.union([ CheckoutUpdateInputObjectSchema, CheckoutUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.CheckoutUpsertArgs>;

export const CheckoutUpsertOneZodSchema = z.object({ select: CheckoutSelectObjectSchema.optional(), include: CheckoutIncludeObjectSchema.optional(), where: CheckoutWhereUniqueInputObjectSchema, create: z.union([ CheckoutCreateInputObjectSchema, CheckoutUncheckedCreateInputObjectSchema ]), update: z.union([ CheckoutUpdateInputObjectSchema, CheckoutUncheckedUpdateInputObjectSchema ]) }).strict();