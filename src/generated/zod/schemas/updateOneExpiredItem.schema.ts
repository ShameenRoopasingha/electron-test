import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { ExpiredItemSelectObjectSchema as ExpiredItemSelectObjectSchema } from './objects/ExpiredItemSelect.schema';
import { ExpiredItemIncludeObjectSchema as ExpiredItemIncludeObjectSchema } from './objects/ExpiredItemInclude.schema';
import { ExpiredItemUpdateInputObjectSchema as ExpiredItemUpdateInputObjectSchema } from './objects/ExpiredItemUpdateInput.schema';
import { ExpiredItemUncheckedUpdateInputObjectSchema as ExpiredItemUncheckedUpdateInputObjectSchema } from './objects/ExpiredItemUncheckedUpdateInput.schema';
import { ExpiredItemWhereUniqueInputObjectSchema as ExpiredItemWhereUniqueInputObjectSchema } from './objects/ExpiredItemWhereUniqueInput.schema';

export const ExpiredItemUpdateOneSchema: z.ZodType<Prisma.ExpiredItemUpdateArgs> = z.object({ select: ExpiredItemSelectObjectSchema.optional(), include: ExpiredItemIncludeObjectSchema.optional(), data: z.union([ExpiredItemUpdateInputObjectSchema, ExpiredItemUncheckedUpdateInputObjectSchema]), where: ExpiredItemWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ExpiredItemUpdateArgs>;

export const ExpiredItemUpdateOneZodSchema = z.object({ select: ExpiredItemSelectObjectSchema.optional(), include: ExpiredItemIncludeObjectSchema.optional(), data: z.union([ExpiredItemUpdateInputObjectSchema, ExpiredItemUncheckedUpdateInputObjectSchema]), where: ExpiredItemWhereUniqueInputObjectSchema }).strict();