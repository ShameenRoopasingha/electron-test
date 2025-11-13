import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { CheckoutCreateManyInputObjectSchema as CheckoutCreateManyInputObjectSchema } from './objects/CheckoutCreateManyInput.schema';

export const CheckoutCreateManySchema: z.ZodType<Prisma.CheckoutCreateManyArgs> = z.object({ data: z.union([ CheckoutCreateManyInputObjectSchema, z.array(CheckoutCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.CheckoutCreateManyArgs>;

export const CheckoutCreateManyZodSchema = z.object({ data: z.union([ CheckoutCreateManyInputObjectSchema, z.array(CheckoutCreateManyInputObjectSchema) ]),  }).strict();