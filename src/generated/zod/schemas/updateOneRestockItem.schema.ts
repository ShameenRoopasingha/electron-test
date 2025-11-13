import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { RestockItemSelectObjectSchema as RestockItemSelectObjectSchema } from './objects/RestockItemSelect.schema';
import { RestockItemIncludeObjectSchema as RestockItemIncludeObjectSchema } from './objects/RestockItemInclude.schema';
import { RestockItemUpdateInputObjectSchema as RestockItemUpdateInputObjectSchema } from './objects/RestockItemUpdateInput.schema';
import { RestockItemUncheckedUpdateInputObjectSchema as RestockItemUncheckedUpdateInputObjectSchema } from './objects/RestockItemUncheckedUpdateInput.schema';
import { RestockItemWhereUniqueInputObjectSchema as RestockItemWhereUniqueInputObjectSchema } from './objects/RestockItemWhereUniqueInput.schema';

export const RestockItemUpdateOneSchema: z.ZodType<Prisma.RestockItemUpdateArgs> = z.object({ select: RestockItemSelectObjectSchema.optional(), include: RestockItemIncludeObjectSchema.optional(), data: z.union([RestockItemUpdateInputObjectSchema, RestockItemUncheckedUpdateInputObjectSchema]), where: RestockItemWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.RestockItemUpdateArgs>;

export const RestockItemUpdateOneZodSchema = z.object({ select: RestockItemSelectObjectSchema.optional(), include: RestockItemIncludeObjectSchema.optional(), data: z.union([RestockItemUpdateInputObjectSchema, RestockItemUncheckedUpdateInputObjectSchema]), where: RestockItemWhereUniqueInputObjectSchema }).strict();