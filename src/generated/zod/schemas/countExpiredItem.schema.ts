import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { ExpiredItemOrderByWithRelationInputObjectSchema as ExpiredItemOrderByWithRelationInputObjectSchema } from './objects/ExpiredItemOrderByWithRelationInput.schema';
import { ExpiredItemWhereInputObjectSchema as ExpiredItemWhereInputObjectSchema } from './objects/ExpiredItemWhereInput.schema';
import { ExpiredItemWhereUniqueInputObjectSchema as ExpiredItemWhereUniqueInputObjectSchema } from './objects/ExpiredItemWhereUniqueInput.schema';
import { ExpiredItemCountAggregateInputObjectSchema as ExpiredItemCountAggregateInputObjectSchema } from './objects/ExpiredItemCountAggregateInput.schema';

export const ExpiredItemCountSchema: z.ZodType<Prisma.ExpiredItemCountArgs> = z.object({ orderBy: z.union([ExpiredItemOrderByWithRelationInputObjectSchema, ExpiredItemOrderByWithRelationInputObjectSchema.array()]).optional(), where: ExpiredItemWhereInputObjectSchema.optional(), cursor: ExpiredItemWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ExpiredItemCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.ExpiredItemCountArgs>;

export const ExpiredItemCountZodSchema = z.object({ orderBy: z.union([ExpiredItemOrderByWithRelationInputObjectSchema, ExpiredItemOrderByWithRelationInputObjectSchema.array()]).optional(), where: ExpiredItemWhereInputObjectSchema.optional(), cursor: ExpiredItemWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ExpiredItemCountAggregateInputObjectSchema ]).optional() }).strict();