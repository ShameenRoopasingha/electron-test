import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { RestockIncludeObjectSchema as RestockIncludeObjectSchema } from './objects/RestockInclude.schema';
import { RestockOrderByWithRelationInputObjectSchema as RestockOrderByWithRelationInputObjectSchema } from './objects/RestockOrderByWithRelationInput.schema';
import { RestockWhereInputObjectSchema as RestockWhereInputObjectSchema } from './objects/RestockWhereInput.schema';
import { RestockWhereUniqueInputObjectSchema as RestockWhereUniqueInputObjectSchema } from './objects/RestockWhereUniqueInput.schema';
import { RestockScalarFieldEnumSchema } from './enums/RestockScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const RestockFindManySelectSchema: z.ZodType<Prisma.RestockSelect> = z.object({
    id: z.boolean().optional(),
    supplierId: z.boolean().optional(),
    userId: z.boolean().optional(),
    totalCost: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    supplier: z.boolean().optional(),
    user: z.boolean().optional(),
    items: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.RestockSelect>;

export const RestockFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    supplierId: z.boolean().optional(),
    userId: z.boolean().optional(),
    totalCost: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    supplier: z.boolean().optional(),
    user: z.boolean().optional(),
    items: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const RestockFindManySchema: z.ZodType<Prisma.RestockFindManyArgs> = z.object({ select: RestockFindManySelectSchema.optional(), include: z.lazy(() => RestockIncludeObjectSchema.optional()), orderBy: z.union([RestockOrderByWithRelationInputObjectSchema, RestockOrderByWithRelationInputObjectSchema.array()]).optional(), where: RestockWhereInputObjectSchema.optional(), cursor: RestockWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([RestockScalarFieldEnumSchema, RestockScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.RestockFindManyArgs>;

export const RestockFindManyZodSchema = z.object({ select: RestockFindManySelectSchema.optional(), include: z.lazy(() => RestockIncludeObjectSchema.optional()), orderBy: z.union([RestockOrderByWithRelationInputObjectSchema, RestockOrderByWithRelationInputObjectSchema.array()]).optional(), where: RestockWhereInputObjectSchema.optional(), cursor: RestockWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([RestockScalarFieldEnumSchema, RestockScalarFieldEnumSchema.array()]).optional() }).strict();