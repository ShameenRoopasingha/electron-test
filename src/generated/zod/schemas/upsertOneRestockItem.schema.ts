import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { RestockItemSelectObjectSchema as RestockItemSelectObjectSchema } from './objects/RestockItemSelect.schema';
import { RestockItemIncludeObjectSchema as RestockItemIncludeObjectSchema } from './objects/RestockItemInclude.schema';
import { RestockItemWhereUniqueInputObjectSchema as RestockItemWhereUniqueInputObjectSchema } from './objects/RestockItemWhereUniqueInput.schema';
import { RestockItemCreateInputObjectSchema as RestockItemCreateInputObjectSchema } from './objects/RestockItemCreateInput.schema';
import { RestockItemUncheckedCreateInputObjectSchema as RestockItemUncheckedCreateInputObjectSchema } from './objects/RestockItemUncheckedCreateInput.schema';
import { RestockItemUpdateInputObjectSchema as RestockItemUpdateInputObjectSchema } from './objects/RestockItemUpdateInput.schema';
import { RestockItemUncheckedUpdateInputObjectSchema as RestockItemUncheckedUpdateInputObjectSchema } from './objects/RestockItemUncheckedUpdateInput.schema';

export const RestockItemUpsertOneSchema: z.ZodType<Prisma.RestockItemUpsertArgs> = z.object({ select: RestockItemSelectObjectSchema.optional(), include: RestockItemIncludeObjectSchema.optional(), where: RestockItemWhereUniqueInputObjectSchema, create: z.union([ RestockItemCreateInputObjectSchema, RestockItemUncheckedCreateInputObjectSchema ]), update: z.union([ RestockItemUpdateInputObjectSchema, RestockItemUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.RestockItemUpsertArgs>;

export const RestockItemUpsertOneZodSchema = z.object({ select: RestockItemSelectObjectSchema.optional(), include: RestockItemIncludeObjectSchema.optional(), where: RestockItemWhereUniqueInputObjectSchema, create: z.union([ RestockItemCreateInputObjectSchema, RestockItemUncheckedCreateInputObjectSchema ]), update: z.union([ RestockItemUpdateInputObjectSchema, RestockItemUncheckedUpdateInputObjectSchema ]) }).strict();