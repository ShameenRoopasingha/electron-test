import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { ExpiredItemSelectObjectSchema as ExpiredItemSelectObjectSchema } from './objects/ExpiredItemSelect.schema';
import { ExpiredItemIncludeObjectSchema as ExpiredItemIncludeObjectSchema } from './objects/ExpiredItemInclude.schema';
import { ExpiredItemWhereUniqueInputObjectSchema as ExpiredItemWhereUniqueInputObjectSchema } from './objects/ExpiredItemWhereUniqueInput.schema';
import { ExpiredItemCreateInputObjectSchema as ExpiredItemCreateInputObjectSchema } from './objects/ExpiredItemCreateInput.schema';
import { ExpiredItemUncheckedCreateInputObjectSchema as ExpiredItemUncheckedCreateInputObjectSchema } from './objects/ExpiredItemUncheckedCreateInput.schema';
import { ExpiredItemUpdateInputObjectSchema as ExpiredItemUpdateInputObjectSchema } from './objects/ExpiredItemUpdateInput.schema';
import { ExpiredItemUncheckedUpdateInputObjectSchema as ExpiredItemUncheckedUpdateInputObjectSchema } from './objects/ExpiredItemUncheckedUpdateInput.schema';

export const ExpiredItemUpsertOneSchema: z.ZodType<Prisma.ExpiredItemUpsertArgs> = z.object({ select: ExpiredItemSelectObjectSchema.optional(), include: ExpiredItemIncludeObjectSchema.optional(), where: ExpiredItemWhereUniqueInputObjectSchema, create: z.union([ ExpiredItemCreateInputObjectSchema, ExpiredItemUncheckedCreateInputObjectSchema ]), update: z.union([ ExpiredItemUpdateInputObjectSchema, ExpiredItemUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.ExpiredItemUpsertArgs>;

export const ExpiredItemUpsertOneZodSchema = z.object({ select: ExpiredItemSelectObjectSchema.optional(), include: ExpiredItemIncludeObjectSchema.optional(), where: ExpiredItemWhereUniqueInputObjectSchema, create: z.union([ ExpiredItemCreateInputObjectSchema, ExpiredItemUncheckedCreateInputObjectSchema ]), update: z.union([ ExpiredItemUpdateInputObjectSchema, ExpiredItemUncheckedUpdateInputObjectSchema ]) }).strict();