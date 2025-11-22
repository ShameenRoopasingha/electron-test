import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { BusinessDetailsIncludeObjectSchema as BusinessDetailsIncludeObjectSchema } from './objects/BusinessDetailsInclude.schema';
import { BusinessDetailsOrderByWithRelationInputObjectSchema as BusinessDetailsOrderByWithRelationInputObjectSchema } from './objects/BusinessDetailsOrderByWithRelationInput.schema';
import { BusinessDetailsWhereInputObjectSchema as BusinessDetailsWhereInputObjectSchema } from './objects/BusinessDetailsWhereInput.schema';
import { BusinessDetailsWhereUniqueInputObjectSchema as BusinessDetailsWhereUniqueInputObjectSchema } from './objects/BusinessDetailsWhereUniqueInput.schema';
import { BusinessDetailsScalarFieldEnumSchema } from './enums/BusinessDetailsScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const BusinessDetailsFindFirstOrThrowSelectSchema: z.ZodType<Prisma.BusinessDetailsSelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    registrationNumber: z.boolean().optional(),
    address: z.boolean().optional(),
    email: z.boolean().optional(),
    phone: z.boolean().optional(),
    logoUrl: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    ownerId: z.boolean().optional(),
    owner: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.BusinessDetailsSelect>;

export const BusinessDetailsFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    registrationNumber: z.boolean().optional(),
    address: z.boolean().optional(),
    email: z.boolean().optional(),
    phone: z.boolean().optional(),
    logoUrl: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    ownerId: z.boolean().optional(),
    owner: z.boolean().optional()
  }).strict();

export const BusinessDetailsFindFirstOrThrowSchema: z.ZodType<Prisma.BusinessDetailsFindFirstOrThrowArgs> = z.object({ select: BusinessDetailsFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => BusinessDetailsIncludeObjectSchema.optional()), orderBy: z.union([BusinessDetailsOrderByWithRelationInputObjectSchema, BusinessDetailsOrderByWithRelationInputObjectSchema.array()]).optional(), where: BusinessDetailsWhereInputObjectSchema.optional(), cursor: BusinessDetailsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([BusinessDetailsScalarFieldEnumSchema, BusinessDetailsScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.BusinessDetailsFindFirstOrThrowArgs>;

export const BusinessDetailsFindFirstOrThrowZodSchema = z.object({ select: BusinessDetailsFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => BusinessDetailsIncludeObjectSchema.optional()), orderBy: z.union([BusinessDetailsOrderByWithRelationInputObjectSchema, BusinessDetailsOrderByWithRelationInputObjectSchema.array()]).optional(), where: BusinessDetailsWhereInputObjectSchema.optional(), cursor: BusinessDetailsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([BusinessDetailsScalarFieldEnumSchema, BusinessDetailsScalarFieldEnumSchema.array()]).optional() }).strict();