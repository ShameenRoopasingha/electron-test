import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ItemUpdateWithoutReturnedOrdersInputObjectSchema as ItemUpdateWithoutReturnedOrdersInputObjectSchema } from './ItemUpdateWithoutReturnedOrdersInput.schema';
import { ItemUncheckedUpdateWithoutReturnedOrdersInputObjectSchema as ItemUncheckedUpdateWithoutReturnedOrdersInputObjectSchema } from './ItemUncheckedUpdateWithoutReturnedOrdersInput.schema';
import { ItemCreateWithoutReturnedOrdersInputObjectSchema as ItemCreateWithoutReturnedOrdersInputObjectSchema } from './ItemCreateWithoutReturnedOrdersInput.schema';
import { ItemUncheckedCreateWithoutReturnedOrdersInputObjectSchema as ItemUncheckedCreateWithoutReturnedOrdersInputObjectSchema } from './ItemUncheckedCreateWithoutReturnedOrdersInput.schema';
import { ItemWhereInputObjectSchema as ItemWhereInputObjectSchema } from './ItemWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ItemUpdateWithoutReturnedOrdersInputObjectSchema), z.lazy(() => ItemUncheckedUpdateWithoutReturnedOrdersInputObjectSchema)]),
  create: z.union([z.lazy(() => ItemCreateWithoutReturnedOrdersInputObjectSchema), z.lazy(() => ItemUncheckedCreateWithoutReturnedOrdersInputObjectSchema)]),
  where: z.lazy(() => ItemWhereInputObjectSchema).optional()
}).strict();
export const ItemUpsertWithoutReturnedOrdersInputObjectSchema: z.ZodType<Prisma.ItemUpsertWithoutReturnedOrdersInput> = makeSchema() as unknown as z.ZodType<Prisma.ItemUpsertWithoutReturnedOrdersInput>;
export const ItemUpsertWithoutReturnedOrdersInputObjectZodSchema = makeSchema();
