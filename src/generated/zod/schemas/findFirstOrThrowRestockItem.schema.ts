import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { RestockItemIncludeObjectSchema as RestockItemIncludeObjectSchema } from './objects/RestockItemInclude.schema';
import { RestockItemOrderByWithRelationInputObjectSchema as RestockItemOrderByWithRelationInputObjectSchema } from './objects/RestockItemOrderByWithRelationInput.schema';
import { RestockItemWhereInputObjectSchema as RestockItemWhereInputObjectSchema } from './objects/RestockItemWhereInput.schema';
import { RestockItemWhereUniqueInputObjectSchema as RestockItemWhereUniqueInputObjectSchema } from './objects/RestockItemWhereUniqueInput.schema';
import { RestockItemScalarFieldEnumSchema } from './enums/RestockItemScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const RestockItemFindFirstOrThrowSelectSchema: z.ZodType<Prisma.RestockItemSelect> = z.object({
    id: z.boolean().optional(),
    restockId: z.boolean().optional(),
    itemId: z.boolean().optional(),
    quantity: z.boolean().optional(),
    costPrice: z.boolean().optional(),
    restock: z.boolean().optional(),
    item: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.RestockItemSelect>;

export const RestockItemFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    restockId: z.boolean().optional(),
    itemId: z.boolean().optional(),
    quantity: z.boolean().optional(),
    costPrice: z.boolean().optional(),
    restock: z.boolean().optional(),
    item: z.boolean().optional()
  }).strict();

export const RestockItemFindFirstOrThrowSchema: z.ZodType<Prisma.RestockItemFindFirstOrThrowArgs> = z.object({ select: RestockItemFindFirstOrThrowSelectSchema.optional(), include: RestockItemIncludeObjectSchema.optional(), orderBy: z.union([RestockItemOrderByWithRelationInputObjectSchema, RestockItemOrderByWithRelationInputObjectSchema.array()]).optional(), where: RestockItemWhereInputObjectSchema.optional(), cursor: RestockItemWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([RestockItemScalarFieldEnumSchema, RestockItemScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.RestockItemFindFirstOrThrowArgs>;

export const RestockItemFindFirstOrThrowZodSchema = z.object({ select: RestockItemFindFirstOrThrowSelectSchema.optional(), include: RestockItemIncludeObjectSchema.optional(), orderBy: z.union([RestockItemOrderByWithRelationInputObjectSchema, RestockItemOrderByWithRelationInputObjectSchema.array()]).optional(), where: RestockItemWhereInputObjectSchema.optional(), cursor: RestockItemWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([RestockItemScalarFieldEnumSchema, RestockItemScalarFieldEnumSchema.array()]).optional() }).strict();