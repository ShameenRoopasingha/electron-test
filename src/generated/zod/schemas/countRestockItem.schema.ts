import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { RestockItemOrderByWithRelationInputObjectSchema as RestockItemOrderByWithRelationInputObjectSchema } from './objects/RestockItemOrderByWithRelationInput.schema';
import { RestockItemWhereInputObjectSchema as RestockItemWhereInputObjectSchema } from './objects/RestockItemWhereInput.schema';
import { RestockItemWhereUniqueInputObjectSchema as RestockItemWhereUniqueInputObjectSchema } from './objects/RestockItemWhereUniqueInput.schema';
import { RestockItemCountAggregateInputObjectSchema as RestockItemCountAggregateInputObjectSchema } from './objects/RestockItemCountAggregateInput.schema';

export const RestockItemCountSchema: z.ZodType<Prisma.RestockItemCountArgs> = z.object({ orderBy: z.union([RestockItemOrderByWithRelationInputObjectSchema, RestockItemOrderByWithRelationInputObjectSchema.array()]).optional(), where: RestockItemWhereInputObjectSchema.optional(), cursor: RestockItemWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), RestockItemCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.RestockItemCountArgs>;

export const RestockItemCountZodSchema = z.object({ orderBy: z.union([RestockItemOrderByWithRelationInputObjectSchema, RestockItemOrderByWithRelationInputObjectSchema.array()]).optional(), where: RestockItemWhereInputObjectSchema.optional(), cursor: RestockItemWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), RestockItemCountAggregateInputObjectSchema ]).optional() }).strict();