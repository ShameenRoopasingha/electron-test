import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ItemUpdateWithoutExpiredItemsInputObjectSchema as ItemUpdateWithoutExpiredItemsInputObjectSchema } from './ItemUpdateWithoutExpiredItemsInput.schema';
import { ItemUncheckedUpdateWithoutExpiredItemsInputObjectSchema as ItemUncheckedUpdateWithoutExpiredItemsInputObjectSchema } from './ItemUncheckedUpdateWithoutExpiredItemsInput.schema';
import { ItemCreateWithoutExpiredItemsInputObjectSchema as ItemCreateWithoutExpiredItemsInputObjectSchema } from './ItemCreateWithoutExpiredItemsInput.schema';
import { ItemUncheckedCreateWithoutExpiredItemsInputObjectSchema as ItemUncheckedCreateWithoutExpiredItemsInputObjectSchema } from './ItemUncheckedCreateWithoutExpiredItemsInput.schema';
import { ItemWhereInputObjectSchema as ItemWhereInputObjectSchema } from './ItemWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ItemUpdateWithoutExpiredItemsInputObjectSchema), z.lazy(() => ItemUncheckedUpdateWithoutExpiredItemsInputObjectSchema)]),
  create: z.union([z.lazy(() => ItemCreateWithoutExpiredItemsInputObjectSchema), z.lazy(() => ItemUncheckedCreateWithoutExpiredItemsInputObjectSchema)]),
  where: z.lazy(() => ItemWhereInputObjectSchema).optional()
}).strict();
export const ItemUpsertWithoutExpiredItemsInputObjectSchema: z.ZodType<Prisma.ItemUpsertWithoutExpiredItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.ItemUpsertWithoutExpiredItemsInput>;
export const ItemUpsertWithoutExpiredItemsInputObjectZodSchema = makeSchema();
