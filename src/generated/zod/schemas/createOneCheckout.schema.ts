import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { CheckoutSelectObjectSchema as CheckoutSelectObjectSchema } from './objects/CheckoutSelect.schema';
import { CheckoutIncludeObjectSchema as CheckoutIncludeObjectSchema } from './objects/CheckoutInclude.schema';
import { CheckoutCreateInputObjectSchema as CheckoutCreateInputObjectSchema } from './objects/CheckoutCreateInput.schema';
import { CheckoutUncheckedCreateInputObjectSchema as CheckoutUncheckedCreateInputObjectSchema } from './objects/CheckoutUncheckedCreateInput.schema';

export const CheckoutCreateOneSchema: z.ZodType<Prisma.CheckoutCreateArgs> = z.object({ select: CheckoutSelectObjectSchema.optional(), include: CheckoutIncludeObjectSchema.optional(), data: z.union([CheckoutCreateInputObjectSchema, CheckoutUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.CheckoutCreateArgs>;

export const CheckoutCreateOneZodSchema = z.object({ select: CheckoutSelectObjectSchema.optional(), include: CheckoutIncludeObjectSchema.optional(), data: z.union([CheckoutCreateInputObjectSchema, CheckoutUncheckedCreateInputObjectSchema]) }).strict();