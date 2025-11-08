import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { CheckoutSelectObjectSchema as CheckoutSelectObjectSchema } from './objects/CheckoutSelect.schema';
import { CheckoutIncludeObjectSchema as CheckoutIncludeObjectSchema } from './objects/CheckoutInclude.schema';
import { CheckoutUpdateInputObjectSchema as CheckoutUpdateInputObjectSchema } from './objects/CheckoutUpdateInput.schema';
import { CheckoutUncheckedUpdateInputObjectSchema as CheckoutUncheckedUpdateInputObjectSchema } from './objects/CheckoutUncheckedUpdateInput.schema';
import { CheckoutWhereUniqueInputObjectSchema as CheckoutWhereUniqueInputObjectSchema } from './objects/CheckoutWhereUniqueInput.schema';

export const CheckoutUpdateOneSchema: z.ZodType<Prisma.CheckoutUpdateArgs> = z.object({ select: CheckoutSelectObjectSchema.optional(), include: CheckoutIncludeObjectSchema.optional(), data: z.union([CheckoutUpdateInputObjectSchema, CheckoutUncheckedUpdateInputObjectSchema]), where: CheckoutWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.CheckoutUpdateArgs>;

export const CheckoutUpdateOneZodSchema = z.object({ select: CheckoutSelectObjectSchema.optional(), include: CheckoutIncludeObjectSchema.optional(), data: z.union([CheckoutUpdateInputObjectSchema, CheckoutUncheckedUpdateInputObjectSchema]), where: CheckoutWhereUniqueInputObjectSchema }).strict();