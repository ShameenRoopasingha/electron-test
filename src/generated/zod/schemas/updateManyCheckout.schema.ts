import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { CheckoutUpdateManyMutationInputObjectSchema as CheckoutUpdateManyMutationInputObjectSchema } from './objects/CheckoutUpdateManyMutationInput.schema';
import { CheckoutWhereInputObjectSchema as CheckoutWhereInputObjectSchema } from './objects/CheckoutWhereInput.schema';

export const CheckoutUpdateManySchema: z.ZodType<Prisma.CheckoutUpdateManyArgs> = z.object({ data: CheckoutUpdateManyMutationInputObjectSchema, where: CheckoutWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.CheckoutUpdateManyArgs>;

export const CheckoutUpdateManyZodSchema = z.object({ data: CheckoutUpdateManyMutationInputObjectSchema, where: CheckoutWhereInputObjectSchema.optional() }).strict();