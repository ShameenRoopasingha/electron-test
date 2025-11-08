import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ItemCreateWithoutReturnedOrdersInputObjectSchema as ItemCreateWithoutReturnedOrdersInputObjectSchema } from './ItemCreateWithoutReturnedOrdersInput.schema';
import { ItemUncheckedCreateWithoutReturnedOrdersInputObjectSchema as ItemUncheckedCreateWithoutReturnedOrdersInputObjectSchema } from './ItemUncheckedCreateWithoutReturnedOrdersInput.schema';
import { ItemCreateOrConnectWithoutReturnedOrdersInputObjectSchema as ItemCreateOrConnectWithoutReturnedOrdersInputObjectSchema } from './ItemCreateOrConnectWithoutReturnedOrdersInput.schema';
import { ItemWhereUniqueInputObjectSchema as ItemWhereUniqueInputObjectSchema } from './ItemWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ItemCreateWithoutReturnedOrdersInputObjectSchema), z.lazy(() => ItemUncheckedCreateWithoutReturnedOrdersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ItemCreateOrConnectWithoutReturnedOrdersInputObjectSchema).optional(),
  connect: z.lazy(() => ItemWhereUniqueInputObjectSchema).optional()
}).strict();
export const ItemCreateNestedOneWithoutReturnedOrdersInputObjectSchema: z.ZodType<Prisma.ItemCreateNestedOneWithoutReturnedOrdersInput> = makeSchema() as unknown as z.ZodType<Prisma.ItemCreateNestedOneWithoutReturnedOrdersInput>;
export const ItemCreateNestedOneWithoutReturnedOrdersInputObjectZodSchema = makeSchema();
