import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ItemCreateWithoutReturnedOrdersInputObjectSchema as ItemCreateWithoutReturnedOrdersInputObjectSchema } from './ItemCreateWithoutReturnedOrdersInput.schema';
import { ItemUncheckedCreateWithoutReturnedOrdersInputObjectSchema as ItemUncheckedCreateWithoutReturnedOrdersInputObjectSchema } from './ItemUncheckedCreateWithoutReturnedOrdersInput.schema';
import { ItemCreateOrConnectWithoutReturnedOrdersInputObjectSchema as ItemCreateOrConnectWithoutReturnedOrdersInputObjectSchema } from './ItemCreateOrConnectWithoutReturnedOrdersInput.schema';
import { ItemUpsertWithoutReturnedOrdersInputObjectSchema as ItemUpsertWithoutReturnedOrdersInputObjectSchema } from './ItemUpsertWithoutReturnedOrdersInput.schema';
import { ItemWhereInputObjectSchema as ItemWhereInputObjectSchema } from './ItemWhereInput.schema';
import { ItemWhereUniqueInputObjectSchema as ItemWhereUniqueInputObjectSchema } from './ItemWhereUniqueInput.schema';
import { ItemUpdateToOneWithWhereWithoutReturnedOrdersInputObjectSchema as ItemUpdateToOneWithWhereWithoutReturnedOrdersInputObjectSchema } from './ItemUpdateToOneWithWhereWithoutReturnedOrdersInput.schema';
import { ItemUpdateWithoutReturnedOrdersInputObjectSchema as ItemUpdateWithoutReturnedOrdersInputObjectSchema } from './ItemUpdateWithoutReturnedOrdersInput.schema';
import { ItemUncheckedUpdateWithoutReturnedOrdersInputObjectSchema as ItemUncheckedUpdateWithoutReturnedOrdersInputObjectSchema } from './ItemUncheckedUpdateWithoutReturnedOrdersInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ItemCreateWithoutReturnedOrdersInputObjectSchema), z.lazy(() => ItemUncheckedCreateWithoutReturnedOrdersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ItemCreateOrConnectWithoutReturnedOrdersInputObjectSchema).optional(),
  upsert: z.lazy(() => ItemUpsertWithoutReturnedOrdersInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => ItemWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => ItemWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => ItemWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ItemUpdateToOneWithWhereWithoutReturnedOrdersInputObjectSchema), z.lazy(() => ItemUpdateWithoutReturnedOrdersInputObjectSchema), z.lazy(() => ItemUncheckedUpdateWithoutReturnedOrdersInputObjectSchema)]).optional()
}).strict();
export const ItemUpdateOneWithoutReturnedOrdersNestedInputObjectSchema: z.ZodType<Prisma.ItemUpdateOneWithoutReturnedOrdersNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ItemUpdateOneWithoutReturnedOrdersNestedInput>;
export const ItemUpdateOneWithoutReturnedOrdersNestedInputObjectZodSchema = makeSchema();
