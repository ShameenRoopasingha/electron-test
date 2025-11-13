import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { ReturnedOrderIncludeObjectSchema as ReturnedOrderIncludeObjectSchema } from './objects/ReturnedOrderInclude.schema';
import { ReturnedOrderOrderByWithRelationInputObjectSchema as ReturnedOrderOrderByWithRelationInputObjectSchema } from './objects/ReturnedOrderOrderByWithRelationInput.schema';
import { ReturnedOrderWhereInputObjectSchema as ReturnedOrderWhereInputObjectSchema } from './objects/ReturnedOrderWhereInput.schema';
import { ReturnedOrderWhereUniqueInputObjectSchema as ReturnedOrderWhereUniqueInputObjectSchema } from './objects/ReturnedOrderWhereUniqueInput.schema';
import { ReturnedOrderScalarFieldEnumSchema } from './enums/ReturnedOrderScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ReturnedOrderFindManySelectSchema: z.ZodType<Prisma.ReturnedOrderSelect> = z.object({
    id: z.boolean().optional(),
    billId: z.boolean().optional(),
    itemId: z.boolean().optional(),
    quantity: z.boolean().optional(),
    reason: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    bill: z.boolean().optional(),
    item: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ReturnedOrderSelect>;

export const ReturnedOrderFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    billId: z.boolean().optional(),
    itemId: z.boolean().optional(),
    quantity: z.boolean().optional(),
    reason: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    bill: z.boolean().optional(),
    item: z.boolean().optional()
  }).strict();

export const ReturnedOrderFindManySchema: z.ZodType<Prisma.ReturnedOrderFindManyArgs> = z.object({ select: ReturnedOrderFindManySelectSchema.optional(), include: ReturnedOrderIncludeObjectSchema.optional(), orderBy: z.union([ReturnedOrderOrderByWithRelationInputObjectSchema, ReturnedOrderOrderByWithRelationInputObjectSchema.array()]).optional(), where: ReturnedOrderWhereInputObjectSchema.optional(), cursor: ReturnedOrderWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ReturnedOrderScalarFieldEnumSchema, ReturnedOrderScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ReturnedOrderFindManyArgs>;

export const ReturnedOrderFindManyZodSchema = z.object({ select: ReturnedOrderFindManySelectSchema.optional(), include: ReturnedOrderIncludeObjectSchema.optional(), orderBy: z.union([ReturnedOrderOrderByWithRelationInputObjectSchema, ReturnedOrderOrderByWithRelationInputObjectSchema.array()]).optional(), where: ReturnedOrderWhereInputObjectSchema.optional(), cursor: ReturnedOrderWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ReturnedOrderScalarFieldEnumSchema, ReturnedOrderScalarFieldEnumSchema.array()]).optional() }).strict();