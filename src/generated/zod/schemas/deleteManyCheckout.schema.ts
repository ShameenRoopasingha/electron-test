import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { CheckoutWhereInputObjectSchema as CheckoutWhereInputObjectSchema } from './objects/CheckoutWhereInput.schema';

export const CheckoutDeleteManySchema: z.ZodType<Prisma.CheckoutDeleteManyArgs> = z.object({ where: CheckoutWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.CheckoutDeleteManyArgs>;

export const CheckoutDeleteManyZodSchema = z.object({ where: CheckoutWhereInputObjectSchema.optional() }).strict();