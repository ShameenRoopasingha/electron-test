import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { BillIncludeObjectSchema as BillIncludeObjectSchema } from './objects/BillInclude.schema';
import { BillOrderByWithRelationInputObjectSchema as BillOrderByWithRelationInputObjectSchema } from './objects/BillOrderByWithRelationInput.schema';
import { BillWhereInputObjectSchema as BillWhereInputObjectSchema } from './objects/BillWhereInput.schema';
import { BillWhereUniqueInputObjectSchema as BillWhereUniqueInputObjectSchema } from './objects/BillWhereUniqueInput.schema';
import { BillScalarFieldEnumSchema } from './enums/BillScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const BillFindFirstSelectSchema: z.ZodType<Prisma.BillSelect> = z.object({
    id: z.boolean().optional(),
    userId: z.boolean().optional(),
    customerId: z.boolean().optional(),
    totalAmount: z.boolean().optional(),
    paymentMethod: z.boolean().optional(),
    paymentStatus: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    user: z.boolean().optional(),
    customer: z.boolean().optional(),
    checkouts: z.boolean().optional(),
    returnedOrders: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.BillSelect>;

export const BillFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    userId: z.boolean().optional(),
    customerId: z.boolean().optional(),
    totalAmount: z.boolean().optional(),
    paymentMethod: z.boolean().optional(),
    paymentStatus: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    user: z.boolean().optional(),
    customer: z.boolean().optional(),
    checkouts: z.boolean().optional(),
    returnedOrders: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const BillFindFirstSchema: z.ZodType<Prisma.BillFindFirstArgs> = z.object({ select: BillFindFirstSelectSchema.optional(), include: z.lazy(() => BillIncludeObjectSchema.optional()), orderBy: z.union([BillOrderByWithRelationInputObjectSchema, BillOrderByWithRelationInputObjectSchema.array()]).optional(), where: BillWhereInputObjectSchema.optional(), cursor: BillWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([BillScalarFieldEnumSchema, BillScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.BillFindFirstArgs>;

export const BillFindFirstZodSchema = z.object({ select: BillFindFirstSelectSchema.optional(), include: z.lazy(() => BillIncludeObjectSchema.optional()), orderBy: z.union([BillOrderByWithRelationInputObjectSchema, BillOrderByWithRelationInputObjectSchema.array()]).optional(), where: BillWhereInputObjectSchema.optional(), cursor: BillWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([BillScalarFieldEnumSchema, BillScalarFieldEnumSchema.array()]).optional() }).strict();