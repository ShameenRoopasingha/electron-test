import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { ItemIncludeObjectSchema as ItemIncludeObjectSchema } from './objects/ItemInclude.schema';
import { ItemOrderByWithRelationInputObjectSchema as ItemOrderByWithRelationInputObjectSchema } from './objects/ItemOrderByWithRelationInput.schema';
import { ItemWhereInputObjectSchema as ItemWhereInputObjectSchema } from './objects/ItemWhereInput.schema';
import { ItemWhereUniqueInputObjectSchema as ItemWhereUniqueInputObjectSchema } from './objects/ItemWhereUniqueInput.schema';
import { ItemScalarFieldEnumSchema } from './enums/ItemScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ItemFindFirstOrThrowSelectSchema: z.ZodType<Prisma.ItemSelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    categoryId: z.boolean().optional(),
    supplierId: z.boolean().optional(),
    barcode: z.boolean().optional(),
    costPrice: z.boolean().optional(),
    sellingPrice: z.boolean().optional(),
    quantityInStock: z.boolean().optional(),
    reorder_level: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    category: z.boolean().optional(),
    supplier: z.boolean().optional(),
    checkouts: z.boolean().optional(),
    returnedOrders: z.boolean().optional(),
    defects: z.boolean().optional(),
    expiredItems: z.boolean().optional(),
    restockItems: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ItemSelect>;

export const ItemFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    categoryId: z.boolean().optional(),
    supplierId: z.boolean().optional(),
    barcode: z.boolean().optional(),
    costPrice: z.boolean().optional(),
    sellingPrice: z.boolean().optional(),
    quantityInStock: z.boolean().optional(),
    reorder_level: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    category: z.boolean().optional(),
    supplier: z.boolean().optional(),
    checkouts: z.boolean().optional(),
    returnedOrders: z.boolean().optional(),
    defects: z.boolean().optional(),
    expiredItems: z.boolean().optional(),
    restockItems: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const ItemFindFirstOrThrowSchema: z.ZodType<Prisma.ItemFindFirstOrThrowArgs> = z.object({ select: ItemFindFirstOrThrowSelectSchema.optional(), include: ItemIncludeObjectSchema.optional(), orderBy: z.union([ItemOrderByWithRelationInputObjectSchema, ItemOrderByWithRelationInputObjectSchema.array()]).optional(), where: ItemWhereInputObjectSchema.optional(), cursor: ItemWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ItemScalarFieldEnumSchema, ItemScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ItemFindFirstOrThrowArgs>;

export const ItemFindFirstOrThrowZodSchema = z.object({ select: ItemFindFirstOrThrowSelectSchema.optional(), include: ItemIncludeObjectSchema.optional(), orderBy: z.union([ItemOrderByWithRelationInputObjectSchema, ItemOrderByWithRelationInputObjectSchema.array()]).optional(), where: ItemWhereInputObjectSchema.optional(), cursor: ItemWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ItemScalarFieldEnumSchema, ItemScalarFieldEnumSchema.array()]).optional() }).strict();