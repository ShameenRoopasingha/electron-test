import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { CheckoutOrderByWithRelationInputObjectSchema as CheckoutOrderByWithRelationInputObjectSchema } from './objects/CheckoutOrderByWithRelationInput.schema';
import { CheckoutWhereInputObjectSchema as CheckoutWhereInputObjectSchema } from './objects/CheckoutWhereInput.schema';
import { CheckoutWhereUniqueInputObjectSchema as CheckoutWhereUniqueInputObjectSchema } from './objects/CheckoutWhereUniqueInput.schema';
import { CheckoutCountAggregateInputObjectSchema as CheckoutCountAggregateInputObjectSchema } from './objects/CheckoutCountAggregateInput.schema';

export const CheckoutCountSchema: z.ZodType<Prisma.CheckoutCountArgs> = z.object({ orderBy: z.union([CheckoutOrderByWithRelationInputObjectSchema, CheckoutOrderByWithRelationInputObjectSchema.array()]).optional(), where: CheckoutWhereInputObjectSchema.optional(), cursor: CheckoutWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), CheckoutCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.CheckoutCountArgs>;

export const CheckoutCountZodSchema = z.object({ orderBy: z.union([CheckoutOrderByWithRelationInputObjectSchema, CheckoutOrderByWithRelationInputObjectSchema.array()]).optional(), where: CheckoutWhereInputObjectSchema.optional(), cursor: CheckoutWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), CheckoutCountAggregateInputObjectSchema ]).optional() }).strict();