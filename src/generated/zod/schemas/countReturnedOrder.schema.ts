import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { ReturnedOrderOrderByWithRelationInputObjectSchema as ReturnedOrderOrderByWithRelationInputObjectSchema } from './objects/ReturnedOrderOrderByWithRelationInput.schema';
import { ReturnedOrderWhereInputObjectSchema as ReturnedOrderWhereInputObjectSchema } from './objects/ReturnedOrderWhereInput.schema';
import { ReturnedOrderWhereUniqueInputObjectSchema as ReturnedOrderWhereUniqueInputObjectSchema } from './objects/ReturnedOrderWhereUniqueInput.schema';
import { ReturnedOrderCountAggregateInputObjectSchema as ReturnedOrderCountAggregateInputObjectSchema } from './objects/ReturnedOrderCountAggregateInput.schema';

export const ReturnedOrderCountSchema: z.ZodType<Prisma.ReturnedOrderCountArgs> = z.object({ orderBy: z.union([ReturnedOrderOrderByWithRelationInputObjectSchema, ReturnedOrderOrderByWithRelationInputObjectSchema.array()]).optional(), where: ReturnedOrderWhereInputObjectSchema.optional(), cursor: ReturnedOrderWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ReturnedOrderCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.ReturnedOrderCountArgs>;

export const ReturnedOrderCountZodSchema = z.object({ orderBy: z.union([ReturnedOrderOrderByWithRelationInputObjectSchema, ReturnedOrderOrderByWithRelationInputObjectSchema.array()]).optional(), where: ReturnedOrderWhereInputObjectSchema.optional(), cursor: ReturnedOrderWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ReturnedOrderCountAggregateInputObjectSchema ]).optional() }).strict();