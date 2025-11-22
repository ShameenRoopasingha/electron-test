import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { CheckoutIncludeObjectSchema as CheckoutIncludeObjectSchema } from './objects/CheckoutInclude.schema';
import { CheckoutOrderByWithRelationInputObjectSchema as CheckoutOrderByWithRelationInputObjectSchema } from './objects/CheckoutOrderByWithRelationInput.schema';
import { CheckoutWhereInputObjectSchema as CheckoutWhereInputObjectSchema } from './objects/CheckoutWhereInput.schema';
import { CheckoutWhereUniqueInputObjectSchema as CheckoutWhereUniqueInputObjectSchema } from './objects/CheckoutWhereUniqueInput.schema';
import { CheckoutScalarFieldEnumSchema } from './enums/CheckoutScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CheckoutFindManySelectSchema: z.ZodType<Prisma.CheckoutSelect> = z.object({
    id: z.boolean().optional(),
    billId: z.boolean().optional(),
    itemId: z.boolean().optional(),
    quantity: z.boolean().optional(),
    price: z.boolean().optional(),
    payedAmount: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    bill: z.boolean().optional(),
    item: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.CheckoutSelect>;

export const CheckoutFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    billId: z.boolean().optional(),
    itemId: z.boolean().optional(),
    quantity: z.boolean().optional(),
    price: z.boolean().optional(),
    payedAmount: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    bill: z.boolean().optional(),
    item: z.boolean().optional()
  }).strict();

export const CheckoutFindManySchema: z.ZodType<Prisma.CheckoutFindManyArgs> = z.object({ select: CheckoutFindManySelectSchema.optional(), include: z.lazy(() => CheckoutIncludeObjectSchema.optional()), orderBy: z.union([CheckoutOrderByWithRelationInputObjectSchema, CheckoutOrderByWithRelationInputObjectSchema.array()]).optional(), where: CheckoutWhereInputObjectSchema.optional(), cursor: CheckoutWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CheckoutScalarFieldEnumSchema, CheckoutScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.CheckoutFindManyArgs>;

export const CheckoutFindManyZodSchema = z.object({ select: CheckoutFindManySelectSchema.optional(), include: z.lazy(() => CheckoutIncludeObjectSchema.optional()), orderBy: z.union([CheckoutOrderByWithRelationInputObjectSchema, CheckoutOrderByWithRelationInputObjectSchema.array()]).optional(), where: CheckoutWhereInputObjectSchema.optional(), cursor: CheckoutWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CheckoutScalarFieldEnumSchema, CheckoutScalarFieldEnumSchema.array()]).optional() }).strict();