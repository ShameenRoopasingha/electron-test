import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { BillWhereInputObjectSchema as BillWhereInputObjectSchema } from './objects/BillWhereInput.schema';
import { BillOrderByWithAggregationInputObjectSchema as BillOrderByWithAggregationInputObjectSchema } from './objects/BillOrderByWithAggregationInput.schema';
import { BillScalarWhereWithAggregatesInputObjectSchema as BillScalarWhereWithAggregatesInputObjectSchema } from './objects/BillScalarWhereWithAggregatesInput.schema';
import { BillScalarFieldEnumSchema } from './enums/BillScalarFieldEnum.schema';
import { BillCountAggregateInputObjectSchema as BillCountAggregateInputObjectSchema } from './objects/BillCountAggregateInput.schema';
import { BillMinAggregateInputObjectSchema as BillMinAggregateInputObjectSchema } from './objects/BillMinAggregateInput.schema';
import { BillMaxAggregateInputObjectSchema as BillMaxAggregateInputObjectSchema } from './objects/BillMaxAggregateInput.schema';
import { BillAvgAggregateInputObjectSchema as BillAvgAggregateInputObjectSchema } from './objects/BillAvgAggregateInput.schema';
import { BillSumAggregateInputObjectSchema as BillSumAggregateInputObjectSchema } from './objects/BillSumAggregateInput.schema';

export const BillGroupBySchema: z.ZodType<Prisma.BillGroupByArgs> = z.object({ where: BillWhereInputObjectSchema.optional(), orderBy: z.union([BillOrderByWithAggregationInputObjectSchema, BillOrderByWithAggregationInputObjectSchema.array()]).optional(), having: BillScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(BillScalarFieldEnumSchema), _count: z.union([ z.literal(true), BillCountAggregateInputObjectSchema ]).optional(), _min: BillMinAggregateInputObjectSchema.optional(), _max: BillMaxAggregateInputObjectSchema.optional(), _avg: BillAvgAggregateInputObjectSchema.optional(), _sum: BillSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.BillGroupByArgs>;

export const BillGroupByZodSchema = z.object({ where: BillWhereInputObjectSchema.optional(), orderBy: z.union([BillOrderByWithAggregationInputObjectSchema, BillOrderByWithAggregationInputObjectSchema.array()]).optional(), having: BillScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(BillScalarFieldEnumSchema), _count: z.union([ z.literal(true), BillCountAggregateInputObjectSchema ]).optional(), _min: BillMinAggregateInputObjectSchema.optional(), _max: BillMaxAggregateInputObjectSchema.optional(), _avg: BillAvgAggregateInputObjectSchema.optional(), _sum: BillSumAggregateInputObjectSchema.optional() }).strict();