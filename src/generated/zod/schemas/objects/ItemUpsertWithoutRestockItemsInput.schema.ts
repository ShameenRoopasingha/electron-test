import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ItemUpdateWithoutRestockItemsInputObjectSchema as ItemUpdateWithoutRestockItemsInputObjectSchema } from './ItemUpdateWithoutRestockItemsInput.schema';
import { ItemUncheckedUpdateWithoutRestockItemsInputObjectSchema as ItemUncheckedUpdateWithoutRestockItemsInputObjectSchema } from './ItemUncheckedUpdateWithoutRestockItemsInput.schema';
import { ItemCreateWithoutRestockItemsInputObjectSchema as ItemCreateWithoutRestockItemsInputObjectSchema } from './ItemCreateWithoutRestockItemsInput.schema';
import { ItemUncheckedCreateWithoutRestockItemsInputObjectSchema as ItemUncheckedCreateWithoutRestockItemsInputObjectSchema } from './ItemUncheckedCreateWithoutRestockItemsInput.schema';
import { ItemWhereInputObjectSchema as ItemWhereInputObjectSchema } from './ItemWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ItemUpdateWithoutRestockItemsInputObjectSchema), z.lazy(() => ItemUncheckedUpdateWithoutRestockItemsInputObjectSchema)]),
  create: z.union([z.lazy(() => ItemCreateWithoutRestockItemsInputObjectSchema), z.lazy(() => ItemUncheckedCreateWithoutRestockItemsInputObjectSchema)]),
  where: z.lazy(() => ItemWhereInputObjectSchema).optional()
}).strict();
export const ItemUpsertWithoutRestockItemsInputObjectSchema: z.ZodType<Prisma.ItemUpsertWithoutRestockItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.ItemUpsertWithoutRestockItemsInput>;
export const ItemUpsertWithoutRestockItemsInputObjectZodSchema = makeSchema();
