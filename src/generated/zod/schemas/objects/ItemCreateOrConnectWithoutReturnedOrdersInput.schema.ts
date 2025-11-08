import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ItemWhereUniqueInputObjectSchema as ItemWhereUniqueInputObjectSchema } from './ItemWhereUniqueInput.schema';
import { ItemCreateWithoutReturnedOrdersInputObjectSchema as ItemCreateWithoutReturnedOrdersInputObjectSchema } from './ItemCreateWithoutReturnedOrdersInput.schema';
import { ItemUncheckedCreateWithoutReturnedOrdersInputObjectSchema as ItemUncheckedCreateWithoutReturnedOrdersInputObjectSchema } from './ItemUncheckedCreateWithoutReturnedOrdersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ItemWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ItemCreateWithoutReturnedOrdersInputObjectSchema), z.lazy(() => ItemUncheckedCreateWithoutReturnedOrdersInputObjectSchema)])
}).strict();
export const ItemCreateOrConnectWithoutReturnedOrdersInputObjectSchema: z.ZodType<Prisma.ItemCreateOrConnectWithoutReturnedOrdersInput> = makeSchema() as unknown as z.ZodType<Prisma.ItemCreateOrConnectWithoutReturnedOrdersInput>;
export const ItemCreateOrConnectWithoutReturnedOrdersInputObjectZodSchema = makeSchema();
