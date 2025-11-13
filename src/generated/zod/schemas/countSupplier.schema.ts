import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { SupplierOrderByWithRelationInputObjectSchema as SupplierOrderByWithRelationInputObjectSchema } from './objects/SupplierOrderByWithRelationInput.schema';
import { SupplierWhereInputObjectSchema as SupplierWhereInputObjectSchema } from './objects/SupplierWhereInput.schema';
import { SupplierWhereUniqueInputObjectSchema as SupplierWhereUniqueInputObjectSchema } from './objects/SupplierWhereUniqueInput.schema';
import { SupplierCountAggregateInputObjectSchema as SupplierCountAggregateInputObjectSchema } from './objects/SupplierCountAggregateInput.schema';

export const SupplierCountSchema: z.ZodType<Prisma.SupplierCountArgs> = z.object({ orderBy: z.union([SupplierOrderByWithRelationInputObjectSchema, SupplierOrderByWithRelationInputObjectSchema.array()]).optional(), where: SupplierWhereInputObjectSchema.optional(), cursor: SupplierWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), SupplierCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.SupplierCountArgs>;

export const SupplierCountZodSchema = z.object({ orderBy: z.union([SupplierOrderByWithRelationInputObjectSchema, SupplierOrderByWithRelationInputObjectSchema.array()]).optional(), where: SupplierWhereInputObjectSchema.optional(), cursor: SupplierWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), SupplierCountAggregateInputObjectSchema ]).optional() }).strict();