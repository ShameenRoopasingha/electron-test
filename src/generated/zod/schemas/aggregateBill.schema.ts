import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { BillOrderByWithRelationInputObjectSchema as BillOrderByWithRelationInputObjectSchema } from './objects/BillOrderByWithRelationInput.schema';
import { BillWhereInputObjectSchema as BillWhereInputObjectSchema } from './objects/BillWhereInput.schema';
import { BillWhereUniqueInputObjectSchema as BillWhereUniqueInputObjectSchema } from './objects/BillWhereUniqueInput.schema';
import { BillCountAggregateInputObjectSchema as BillCountAggregateInputObjectSchema } from './objects/BillCountAggregateInput.schema';
import { BillMinAggregateInputObjectSchema as BillMinAggregateInputObjectSchema } from './objects/BillMinAggregateInput.schema';
import { BillMaxAggregateInputObjectSchema as BillMaxAggregateInputObjectSchema } from './objects/BillMaxAggregateInput.schema';
import { BillAvgAggregateInputObjectSchema as BillAvgAggregateInputObjectSchema } from './objects/BillAvgAggregateInput.schema';
import { BillSumAggregateInputObjectSchema as BillSumAggregateInputObjectSchema } from './objects/BillSumAggregateInput.schema';

export const BillAggregateSchema: z.ZodType<Prisma.BillAggregateArgs> = z.object({ orderBy: z.union([BillOrderByWithRelationInputObjectSchema, BillOrderByWithRelationInputObjectSchema.array()]).optional(), where: BillWhereInputObjectSchema.optional(), cursor: BillWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), BillCountAggregateInputObjectSchema ]).optional(), _min: BillMinAggregateInputObjectSchema.optional(), _max: BillMaxAggregateInputObjectSchema.optional(), _avg: BillAvgAggregateInputObjectSchema.optional(), _sum: BillSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.BillAggregateArgs>;

export const BillAggregateZodSchema = z.object({ orderBy: z.union([BillOrderByWithRelationInputObjectSchema, BillOrderByWithRelationInputObjectSchema.array()]).optional(), where: BillWhereInputObjectSchema.optional(), cursor: BillWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), BillCountAggregateInputObjectSchema ]).optional(), _min: BillMinAggregateInputObjectSchema.optional(), _max: BillMaxAggregateInputObjectSchema.optional(), _avg: BillAvgAggregateInputObjectSchema.optional(), _sum: BillSumAggregateInputObjectSchema.optional() }).strict();