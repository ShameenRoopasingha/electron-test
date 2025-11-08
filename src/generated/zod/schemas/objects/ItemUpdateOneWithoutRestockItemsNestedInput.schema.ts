import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ItemCreateWithoutRestockItemsInputObjectSchema as ItemCreateWithoutRestockItemsInputObjectSchema } from './ItemCreateWithoutRestockItemsInput.schema';
import { ItemUncheckedCreateWithoutRestockItemsInputObjectSchema as ItemUncheckedCreateWithoutRestockItemsInputObjectSchema } from './ItemUncheckedCreateWithoutRestockItemsInput.schema';
import { ItemCreateOrConnectWithoutRestockItemsInputObjectSchema as ItemCreateOrConnectWithoutRestockItemsInputObjectSchema } from './ItemCreateOrConnectWithoutRestockItemsInput.schema';
import { ItemUpsertWithoutRestockItemsInputObjectSchema as ItemUpsertWithoutRestockItemsInputObjectSchema } from './ItemUpsertWithoutRestockItemsInput.schema';
import { ItemWhereInputObjectSchema as ItemWhereInputObjectSchema } from './ItemWhereInput.schema';
import { ItemWhereUniqueInputObjectSchema as ItemWhereUniqueInputObjectSchema } from './ItemWhereUniqueInput.schema';
import { ItemUpdateToOneWithWhereWithoutRestockItemsInputObjectSchema as ItemUpdateToOneWithWhereWithoutRestockItemsInputObjectSchema } from './ItemUpdateToOneWithWhereWithoutRestockItemsInput.schema';
import { ItemUpdateWithoutRestockItemsInputObjectSchema as ItemUpdateWithoutRestockItemsInputObjectSchema } from './ItemUpdateWithoutRestockItemsInput.schema';
import { ItemUncheckedUpdateWithoutRestockItemsInputObjectSchema as ItemUncheckedUpdateWithoutRestockItemsInputObjectSchema } from './ItemUncheckedUpdateWithoutRestockItemsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ItemCreateWithoutRestockItemsInputObjectSchema), z.lazy(() => ItemUncheckedCreateWithoutRestockItemsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ItemCreateOrConnectWithoutRestockItemsInputObjectSchema).optional(),
  upsert: z.lazy(() => ItemUpsertWithoutRestockItemsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => ItemWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => ItemWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => ItemWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ItemUpdateToOneWithWhereWithoutRestockItemsInputObjectSchema), z.lazy(() => ItemUpdateWithoutRestockItemsInputObjectSchema), z.lazy(() => ItemUncheckedUpdateWithoutRestockItemsInputObjectSchema)]).optional()
}).strict();
export const ItemUpdateOneWithoutRestockItemsNestedInputObjectSchema: z.ZodType<Prisma.ItemUpdateOneWithoutRestockItemsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ItemUpdateOneWithoutRestockItemsNestedInput>;
export const ItemUpdateOneWithoutRestockItemsNestedInputObjectZodSchema = makeSchema();
