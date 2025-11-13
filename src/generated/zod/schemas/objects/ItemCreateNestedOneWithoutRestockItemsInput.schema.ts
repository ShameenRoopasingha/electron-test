import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ItemCreateWithoutRestockItemsInputObjectSchema as ItemCreateWithoutRestockItemsInputObjectSchema } from './ItemCreateWithoutRestockItemsInput.schema';
import { ItemUncheckedCreateWithoutRestockItemsInputObjectSchema as ItemUncheckedCreateWithoutRestockItemsInputObjectSchema } from './ItemUncheckedCreateWithoutRestockItemsInput.schema';
import { ItemCreateOrConnectWithoutRestockItemsInputObjectSchema as ItemCreateOrConnectWithoutRestockItemsInputObjectSchema } from './ItemCreateOrConnectWithoutRestockItemsInput.schema';
import { ItemWhereUniqueInputObjectSchema as ItemWhereUniqueInputObjectSchema } from './ItemWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ItemCreateWithoutRestockItemsInputObjectSchema), z.lazy(() => ItemUncheckedCreateWithoutRestockItemsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ItemCreateOrConnectWithoutRestockItemsInputObjectSchema).optional(),
  connect: z.lazy(() => ItemWhereUniqueInputObjectSchema).optional()
}).strict();
export const ItemCreateNestedOneWithoutRestockItemsInputObjectSchema: z.ZodType<Prisma.ItemCreateNestedOneWithoutRestockItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.ItemCreateNestedOneWithoutRestockItemsInput>;
export const ItemCreateNestedOneWithoutRestockItemsInputObjectZodSchema = makeSchema();
