import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ItemWhereUniqueInputObjectSchema as ItemWhereUniqueInputObjectSchema } from './ItemWhereUniqueInput.schema';
import { ItemCreateWithoutRestockItemsInputObjectSchema as ItemCreateWithoutRestockItemsInputObjectSchema } from './ItemCreateWithoutRestockItemsInput.schema';
import { ItemUncheckedCreateWithoutRestockItemsInputObjectSchema as ItemUncheckedCreateWithoutRestockItemsInputObjectSchema } from './ItemUncheckedCreateWithoutRestockItemsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ItemWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ItemCreateWithoutRestockItemsInputObjectSchema), z.lazy(() => ItemUncheckedCreateWithoutRestockItemsInputObjectSchema)])
}).strict();
export const ItemCreateOrConnectWithoutRestockItemsInputObjectSchema: z.ZodType<Prisma.ItemCreateOrConnectWithoutRestockItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.ItemCreateOrConnectWithoutRestockItemsInput>;
export const ItemCreateOrConnectWithoutRestockItemsInputObjectZodSchema = makeSchema();
