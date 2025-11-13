import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { DefectOrderByWithRelationInputObjectSchema as DefectOrderByWithRelationInputObjectSchema } from './objects/DefectOrderByWithRelationInput.schema';
import { DefectWhereInputObjectSchema as DefectWhereInputObjectSchema } from './objects/DefectWhereInput.schema';
import { DefectWhereUniqueInputObjectSchema as DefectWhereUniqueInputObjectSchema } from './objects/DefectWhereUniqueInput.schema';
import { DefectCountAggregateInputObjectSchema as DefectCountAggregateInputObjectSchema } from './objects/DefectCountAggregateInput.schema';

export const DefectCountSchema: z.ZodType<Prisma.DefectCountArgs> = z.object({ orderBy: z.union([DefectOrderByWithRelationInputObjectSchema, DefectOrderByWithRelationInputObjectSchema.array()]).optional(), where: DefectWhereInputObjectSchema.optional(), cursor: DefectWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), DefectCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.DefectCountArgs>;

export const DefectCountZodSchema = z.object({ orderBy: z.union([DefectOrderByWithRelationInputObjectSchema, DefectOrderByWithRelationInputObjectSchema.array()]).optional(), where: DefectWhereInputObjectSchema.optional(), cursor: DefectWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), DefectCountAggregateInputObjectSchema ]).optional() }).strict();