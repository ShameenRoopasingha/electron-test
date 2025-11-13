import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { ExpiredItemIncludeObjectSchema as ExpiredItemIncludeObjectSchema } from './objects/ExpiredItemInclude.schema';
import { ExpiredItemOrderByWithRelationInputObjectSchema as ExpiredItemOrderByWithRelationInputObjectSchema } from './objects/ExpiredItemOrderByWithRelationInput.schema';
import { ExpiredItemWhereInputObjectSchema as ExpiredItemWhereInputObjectSchema } from './objects/ExpiredItemWhereInput.schema';
import { ExpiredItemWhereUniqueInputObjectSchema as ExpiredItemWhereUniqueInputObjectSchema } from './objects/ExpiredItemWhereUniqueInput.schema';
import { ExpiredItemScalarFieldEnumSchema } from './enums/ExpiredItemScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ExpiredItemFindFirstOrThrowSelectSchema: z.ZodType<Prisma.ExpiredItemSelect> = z.object({
    id: z.boolean().optional(),
    itemId: z.boolean().optional(),
    quantity: z.boolean().optional(),
    expirationDate: z.boolean().optional(),
    disposedBy: z.boolean().optional(),
    reason: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    item: z.boolean().optional(),
    user: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ExpiredItemSelect>;

export const ExpiredItemFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    itemId: z.boolean().optional(),
    quantity: z.boolean().optional(),
    expirationDate: z.boolean().optional(),
    disposedBy: z.boolean().optional(),
    reason: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    item: z.boolean().optional(),
    user: z.boolean().optional()
  }).strict();

export const ExpiredItemFindFirstOrThrowSchema: z.ZodType<Prisma.ExpiredItemFindFirstOrThrowArgs> = z.object({ select: ExpiredItemFindFirstOrThrowSelectSchema.optional(), include: ExpiredItemIncludeObjectSchema.optional(), orderBy: z.union([ExpiredItemOrderByWithRelationInputObjectSchema, ExpiredItemOrderByWithRelationInputObjectSchema.array()]).optional(), where: ExpiredItemWhereInputObjectSchema.optional(), cursor: ExpiredItemWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ExpiredItemScalarFieldEnumSchema, ExpiredItemScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ExpiredItemFindFirstOrThrowArgs>;

export const ExpiredItemFindFirstOrThrowZodSchema = z.object({ select: ExpiredItemFindFirstOrThrowSelectSchema.optional(), include: ExpiredItemIncludeObjectSchema.optional(), orderBy: z.union([ExpiredItemOrderByWithRelationInputObjectSchema, ExpiredItemOrderByWithRelationInputObjectSchema.array()]).optional(), where: ExpiredItemWhereInputObjectSchema.optional(), cursor: ExpiredItemWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ExpiredItemScalarFieldEnumSchema, ExpiredItemScalarFieldEnumSchema.array()]).optional() }).strict();