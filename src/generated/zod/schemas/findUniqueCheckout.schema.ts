import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { CheckoutSelectObjectSchema as CheckoutSelectObjectSchema } from './objects/CheckoutSelect.schema';
import { CheckoutIncludeObjectSchema as CheckoutIncludeObjectSchema } from './objects/CheckoutInclude.schema';
import { CheckoutWhereUniqueInputObjectSchema as CheckoutWhereUniqueInputObjectSchema } from './objects/CheckoutWhereUniqueInput.schema';

export const CheckoutFindUniqueSchema: z.ZodType<Prisma.CheckoutFindUniqueArgs> = z.object({ select: CheckoutSelectObjectSchema.optional(), include: CheckoutIncludeObjectSchema.optional(), where: CheckoutWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.CheckoutFindUniqueArgs>;

export const CheckoutFindUniqueZodSchema = z.object({ select: CheckoutSelectObjectSchema.optional(), include: CheckoutIncludeObjectSchema.optional(), where: CheckoutWhereUniqueInputObjectSchema }).strict();