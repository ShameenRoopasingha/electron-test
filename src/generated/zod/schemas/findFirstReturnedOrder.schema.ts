import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { ReturnedOrderIncludeObjectSchema as ReturnedOrderIncludeObjectSchema } from './objects/ReturnedOrderInclude.schema';
import { ReturnedOrderOrderByWithRelationInputObjectSchema as ReturnedOrderOrderByWithRelationInputObjectSchema } from './objects/ReturnedOrderOrderByWithRelationInput.schema';
import { ReturnedOrderWhereInputObjectSchema as ReturnedOrderWhereInputObjectSchema } from './objects/ReturnedOrderWhereInput.schema';
import { ReturnedOrderWhereUniqueInputObjectSchema as ReturnedOrderWhereUniqueInputObjectSchema } from './objects/ReturnedOrderWhereUniqueInput.schema';
import { ReturnedOrderScalarFieldEnumSchema } from './enums/ReturnedOrderScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ReturnedOrderFindFirstSelectSchema: z.ZodType<Prisma.ReturnedOrderSelect> = z.object({
    id: z.boolean().optional(),
    billId: z.boolean().optional(),
    itemId: z.boolean().optional(),
    quantity: z.boolean().optional(),
    reason: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    bill: z.boolean().optional(),
    item: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ReturnedOrderSelect>;

export const ReturnedOrderFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    billId: z.boolean().optional(),
    itemId: z.boolean().optional(),
    quantity: z.boolean().optional(),
    reason: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    bill: z.boolean().optional(),
    item: z.boolean().optional()
  }).strict();

export const ReturnedOrderFindFirstSchema: z.ZodType<Prisma.ReturnedOrderFindFirstArgs> = z.object({ select: ReturnedOrderFindFirstSelectSchema.optional(), include: z.lazy(() => ReturnedOrderIncludeObjectSchema.optional()), orderBy: z.union([ReturnedOrderOrderByWithRelationInputObjectSchema, ReturnedOrderOrderByWithRelationInputObjectSchema.array()]).optional(), where: ReturnedOrderWhereInputObjectSchema.optional(), cursor: ReturnedOrderWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ReturnedOrderScalarFieldEnumSchema, ReturnedOrderScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ReturnedOrderFindFirstArgs>;

export const ReturnedOrderFindFirstZodSchema = z.object({ select: ReturnedOrderFindFirstSelectSchema.optional(), include: z.lazy(() => ReturnedOrderIncludeObjectSchema.optional()), orderBy: z.union([ReturnedOrderOrderByWithRelationInputObjectSchema, ReturnedOrderOrderByWithRelationInputObjectSchema.array()]).optional(), where: ReturnedOrderWhereInputObjectSchema.optional(), cursor: ReturnedOrderWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ReturnedOrderScalarFieldEnumSchema, ReturnedOrderScalarFieldEnumSchema.array()]).optional() }).strict();