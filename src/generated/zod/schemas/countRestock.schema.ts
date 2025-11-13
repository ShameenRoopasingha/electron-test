import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { RestockOrderByWithRelationInputObjectSchema as RestockOrderByWithRelationInputObjectSchema } from './objects/RestockOrderByWithRelationInput.schema';
import { RestockWhereInputObjectSchema as RestockWhereInputObjectSchema } from './objects/RestockWhereInput.schema';
import { RestockWhereUniqueInputObjectSchema as RestockWhereUniqueInputObjectSchema } from './objects/RestockWhereUniqueInput.schema';
import { RestockCountAggregateInputObjectSchema as RestockCountAggregateInputObjectSchema } from './objects/RestockCountAggregateInput.schema';

export const RestockCountSchema: z.ZodType<Prisma.RestockCountArgs> = z.object({ orderBy: z.union([RestockOrderByWithRelationInputObjectSchema, RestockOrderByWithRelationInputObjectSchema.array()]).optional(), where: RestockWhereInputObjectSchema.optional(), cursor: RestockWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), RestockCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.RestockCountArgs>;

export const RestockCountZodSchema = z.object({ orderBy: z.union([RestockOrderByWithRelationInputObjectSchema, RestockOrderByWithRelationInputObjectSchema.array()]).optional(), where: RestockWhereInputObjectSchema.optional(), cursor: RestockWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), RestockCountAggregateInputObjectSchema ]).optional() }).strict();