import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { DefectIncludeObjectSchema as DefectIncludeObjectSchema } from './objects/DefectInclude.schema';
import { DefectOrderByWithRelationInputObjectSchema as DefectOrderByWithRelationInputObjectSchema } from './objects/DefectOrderByWithRelationInput.schema';
import { DefectWhereInputObjectSchema as DefectWhereInputObjectSchema } from './objects/DefectWhereInput.schema';
import { DefectWhereUniqueInputObjectSchema as DefectWhereUniqueInputObjectSchema } from './objects/DefectWhereUniqueInput.schema';
import { DefectScalarFieldEnumSchema } from './enums/DefectScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const DefectFindFirstSelectSchema: z.ZodType<Prisma.DefectSelect> = z.object({
    id: z.boolean().optional(),
    itemId: z.boolean().optional(),
    quantity: z.boolean().optional(),
    reason: z.boolean().optional(),
    reportedBy: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    item: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.DefectSelect>;

export const DefectFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    itemId: z.boolean().optional(),
    quantity: z.boolean().optional(),
    reason: z.boolean().optional(),
    reportedBy: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    item: z.boolean().optional()
  }).strict();

export const DefectFindFirstSchema: z.ZodType<Prisma.DefectFindFirstArgs> = z.object({ select: DefectFindFirstSelectSchema.optional(), include: DefectIncludeObjectSchema.optional(), orderBy: z.union([DefectOrderByWithRelationInputObjectSchema, DefectOrderByWithRelationInputObjectSchema.array()]).optional(), where: DefectWhereInputObjectSchema.optional(), cursor: DefectWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DefectScalarFieldEnumSchema, DefectScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.DefectFindFirstArgs>;

export const DefectFindFirstZodSchema = z.object({ select: DefectFindFirstSelectSchema.optional(), include: DefectIncludeObjectSchema.optional(), orderBy: z.union([DefectOrderByWithRelationInputObjectSchema, DefectOrderByWithRelationInputObjectSchema.array()]).optional(), where: DefectWhereInputObjectSchema.optional(), cursor: DefectWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DefectScalarFieldEnumSchema, DefectScalarFieldEnumSchema.array()]).optional() }).strict();