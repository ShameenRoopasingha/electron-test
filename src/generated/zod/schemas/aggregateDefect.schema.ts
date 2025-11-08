import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { DefectOrderByWithRelationInputObjectSchema as DefectOrderByWithRelationInputObjectSchema } from './objects/DefectOrderByWithRelationInput.schema';
import { DefectWhereInputObjectSchema as DefectWhereInputObjectSchema } from './objects/DefectWhereInput.schema';
import { DefectWhereUniqueInputObjectSchema as DefectWhereUniqueInputObjectSchema } from './objects/DefectWhereUniqueInput.schema';
import { DefectCountAggregateInputObjectSchema as DefectCountAggregateInputObjectSchema } from './objects/DefectCountAggregateInput.schema';
import { DefectMinAggregateInputObjectSchema as DefectMinAggregateInputObjectSchema } from './objects/DefectMinAggregateInput.schema';
import { DefectMaxAggregateInputObjectSchema as DefectMaxAggregateInputObjectSchema } from './objects/DefectMaxAggregateInput.schema';
import { DefectAvgAggregateInputObjectSchema as DefectAvgAggregateInputObjectSchema } from './objects/DefectAvgAggregateInput.schema';
import { DefectSumAggregateInputObjectSchema as DefectSumAggregateInputObjectSchema } from './objects/DefectSumAggregateInput.schema';

export const DefectAggregateSchema: z.ZodType<Prisma.DefectAggregateArgs> = z.object({ orderBy: z.union([DefectOrderByWithRelationInputObjectSchema, DefectOrderByWithRelationInputObjectSchema.array()]).optional(), where: DefectWhereInputObjectSchema.optional(), cursor: DefectWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), DefectCountAggregateInputObjectSchema ]).optional(), _min: DefectMinAggregateInputObjectSchema.optional(), _max: DefectMaxAggregateInputObjectSchema.optional(), _avg: DefectAvgAggregateInputObjectSchema.optional(), _sum: DefectSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.DefectAggregateArgs>;

export const DefectAggregateZodSchema = z.object({ orderBy: z.union([DefectOrderByWithRelationInputObjectSchema, DefectOrderByWithRelationInputObjectSchema.array()]).optional(), where: DefectWhereInputObjectSchema.optional(), cursor: DefectWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), DefectCountAggregateInputObjectSchema ]).optional(), _min: DefectMinAggregateInputObjectSchema.optional(), _max: DefectMaxAggregateInputObjectSchema.optional(), _avg: DefectAvgAggregateInputObjectSchema.optional(), _sum: DefectSumAggregateInputObjectSchema.optional() }).strict();