import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ItemCreateWithoutExpiredItemsInputObjectSchema as ItemCreateWithoutExpiredItemsInputObjectSchema } from './ItemCreateWithoutExpiredItemsInput.schema';
import { ItemUncheckedCreateWithoutExpiredItemsInputObjectSchema as ItemUncheckedCreateWithoutExpiredItemsInputObjectSchema } from './ItemUncheckedCreateWithoutExpiredItemsInput.schema';
import { ItemCreateOrConnectWithoutExpiredItemsInputObjectSchema as ItemCreateOrConnectWithoutExpiredItemsInputObjectSchema } from './ItemCreateOrConnectWithoutExpiredItemsInput.schema';
import { ItemUpsertWithoutExpiredItemsInputObjectSchema as ItemUpsertWithoutExpiredItemsInputObjectSchema } from './ItemUpsertWithoutExpiredItemsInput.schema';
import { ItemWhereInputObjectSchema as ItemWhereInputObjectSchema } from './ItemWhereInput.schema';
import { ItemWhereUniqueInputObjectSchema as ItemWhereUniqueInputObjectSchema } from './ItemWhereUniqueInput.schema';
import { ItemUpdateToOneWithWhereWithoutExpiredItemsInputObjectSchema as ItemUpdateToOneWithWhereWithoutExpiredItemsInputObjectSchema } from './ItemUpdateToOneWithWhereWithoutExpiredItemsInput.schema';
import { ItemUpdateWithoutExpiredItemsInputObjectSchema as ItemUpdateWithoutExpiredItemsInputObjectSchema } from './ItemUpdateWithoutExpiredItemsInput.schema';
import { ItemUncheckedUpdateWithoutExpiredItemsInputObjectSchema as ItemUncheckedUpdateWithoutExpiredItemsInputObjectSchema } from './ItemUncheckedUpdateWithoutExpiredItemsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ItemCreateWithoutExpiredItemsInputObjectSchema), z.lazy(() => ItemUncheckedCreateWithoutExpiredItemsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ItemCreateOrConnectWithoutExpiredItemsInputObjectSchema).optional(),
  upsert: z.lazy(() => ItemUpsertWithoutExpiredItemsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => ItemWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => ItemWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => ItemWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ItemUpdateToOneWithWhereWithoutExpiredItemsInputObjectSchema), z.lazy(() => ItemUpdateWithoutExpiredItemsInputObjectSchema), z.lazy(() => ItemUncheckedUpdateWithoutExpiredItemsInputObjectSchema)]).optional()
}).strict();
export const ItemUpdateOneWithoutExpiredItemsNestedInputObjectSchema: z.ZodType<Prisma.ItemUpdateOneWithoutExpiredItemsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ItemUpdateOneWithoutExpiredItemsNestedInput>;
export const ItemUpdateOneWithoutExpiredItemsNestedInputObjectZodSchema = makeSchema();
