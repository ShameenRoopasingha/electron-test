import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { SupplierIncludeObjectSchema as SupplierIncludeObjectSchema } from './objects/SupplierInclude.schema';
import { SupplierOrderByWithRelationInputObjectSchema as SupplierOrderByWithRelationInputObjectSchema } from './objects/SupplierOrderByWithRelationInput.schema';
import { SupplierWhereInputObjectSchema as SupplierWhereInputObjectSchema } from './objects/SupplierWhereInput.schema';
import { SupplierWhereUniqueInputObjectSchema as SupplierWhereUniqueInputObjectSchema } from './objects/SupplierWhereUniqueInput.schema';
import { SupplierScalarFieldEnumSchema } from './enums/SupplierScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const SupplierFindManySelectSchema: z.ZodType<Prisma.SupplierSelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    email: z.boolean().optional(),
    phone: z.boolean().optional(),
    company: z.boolean().optional(),
    address: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    items: z.boolean().optional(),
    restocks: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.SupplierSelect>;

export const SupplierFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    email: z.boolean().optional(),
    phone: z.boolean().optional(),
    company: z.boolean().optional(),
    address: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    items: z.boolean().optional(),
    restocks: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const SupplierFindManySchema: z.ZodType<Prisma.SupplierFindManyArgs> = z.object({ select: SupplierFindManySelectSchema.optional(), include: SupplierIncludeObjectSchema.optional(), orderBy: z.union([SupplierOrderByWithRelationInputObjectSchema, SupplierOrderByWithRelationInputObjectSchema.array()]).optional(), where: SupplierWhereInputObjectSchema.optional(), cursor: SupplierWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([SupplierScalarFieldEnumSchema, SupplierScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.SupplierFindManyArgs>;

export const SupplierFindManyZodSchema = z.object({ select: SupplierFindManySelectSchema.optional(), include: SupplierIncludeObjectSchema.optional(), orderBy: z.union([SupplierOrderByWithRelationInputObjectSchema, SupplierOrderByWithRelationInputObjectSchema.array()]).optional(), where: SupplierWhereInputObjectSchema.optional(), cursor: SupplierWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([SupplierScalarFieldEnumSchema, SupplierScalarFieldEnumSchema.array()]).optional() }).strict();