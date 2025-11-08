import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { RestockItemIncludeObjectSchema as RestockItemIncludeObjectSchema } from './objects/RestockItemInclude.schema';
import { RestockItemOrderByWithRelationInputObjectSchema as RestockItemOrderByWithRelationInputObjectSchema } from './objects/RestockItemOrderByWithRelationInput.schema';
import { RestockItemWhereInputObjectSchema as RestockItemWhereInputObjectSchema } from './objects/RestockItemWhereInput.schema';
import { RestockItemWhereUniqueInputObjectSchema as RestockItemWhereUniqueInputObjectSchema } from './objects/RestockItemWhereUniqueInput.schema';
import { RestockItemScalarFieldEnumSchema } from './enums/RestockItemScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const RestockItemFindManySelectSchema: z.ZodType<Prisma.RestockItemSelect> = z.object({
    id: z.boolean().optional(),
    restockId: z.boolean().optional(),
    itemId: z.boolean().optional(),
    quantity: z.boolean().optional(),
    costPrice: z.boolean().optional(),
    restock: z.boolean().optional(),
    item: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.RestockItemSelect>;

export const RestockItemFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    restockId: z.boolean().optional(),
    itemId: z.boolean().optional(),
    quantity: z.boolean().optional(),
    costPrice: z.boolean().optional(),
    restock: z.boolean().optional(),
    item: z.boolean().optional()
  }).strict();

export const RestockItemFindManySchema: z.ZodType<Prisma.RestockItemFindManyArgs> = z.object({ select: RestockItemFindManySelectSchema.optional(), include: RestockItemIncludeObjectSchema.optional(), orderBy: z.union([RestockItemOrderByWithRelationInputObjectSchema, RestockItemOrderByWithRelationInputObjectSchema.array()]).optional(), where: RestockItemWhereInputObjectSchema.optional(), cursor: RestockItemWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([RestockItemScalarFieldEnumSchema, RestockItemScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.RestockItemFindManyArgs>;

export const RestockItemFindManyZodSchema = z.object({ select: RestockItemFindManySelectSchema.optional(), include: RestockItemIncludeObjectSchema.optional(), orderBy: z.union([RestockItemOrderByWithRelationInputObjectSchema, RestockItemOrderByWithRelationInputObjectSchema.array()]).optional(), where: RestockItemWhereInputObjectSchema.optional(), cursor: RestockItemWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([RestockItemScalarFieldEnumSchema, RestockItemScalarFieldEnumSchema.array()]).optional() }).strict();