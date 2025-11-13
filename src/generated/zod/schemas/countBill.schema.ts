import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { BillOrderByWithRelationInputObjectSchema as BillOrderByWithRelationInputObjectSchema } from './objects/BillOrderByWithRelationInput.schema';
import { BillWhereInputObjectSchema as BillWhereInputObjectSchema } from './objects/BillWhereInput.schema';
import { BillWhereUniqueInputObjectSchema as BillWhereUniqueInputObjectSchema } from './objects/BillWhereUniqueInput.schema';
import { BillCountAggregateInputObjectSchema as BillCountAggregateInputObjectSchema } from './objects/BillCountAggregateInput.schema';

export const BillCountSchema: z.ZodType<Prisma.BillCountArgs> = z.object({ orderBy: z.union([BillOrderByWithRelationInputObjectSchema, BillOrderByWithRelationInputObjectSchema.array()]).optional(), where: BillWhereInputObjectSchema.optional(), cursor: BillWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), BillCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.BillCountArgs>;

export const BillCountZodSchema = z.object({ orderBy: z.union([BillOrderByWithRelationInputObjectSchema, BillOrderByWithRelationInputObjectSchema.array()]).optional(), where: BillWhereInputObjectSchema.optional(), cursor: BillWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), BillCountAggregateInputObjectSchema ]).optional() }).strict();