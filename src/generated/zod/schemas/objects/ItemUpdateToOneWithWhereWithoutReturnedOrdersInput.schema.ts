import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ItemWhereInputObjectSchema as ItemWhereInputObjectSchema } from './ItemWhereInput.schema';
import { ItemUpdateWithoutReturnedOrdersInputObjectSchema as ItemUpdateWithoutReturnedOrdersInputObjectSchema } from './ItemUpdateWithoutReturnedOrdersInput.schema';
import { ItemUncheckedUpdateWithoutReturnedOrdersInputObjectSchema as ItemUncheckedUpdateWithoutReturnedOrdersInputObjectSchema } from './ItemUncheckedUpdateWithoutReturnedOrdersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ItemWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ItemUpdateWithoutReturnedOrdersInputObjectSchema), z.lazy(() => ItemUncheckedUpdateWithoutReturnedOrdersInputObjectSchema)])
}).strict();
export const ItemUpdateToOneWithWhereWithoutReturnedOrdersInputObjectSchema: z.ZodType<Prisma.ItemUpdateToOneWithWhereWithoutReturnedOrdersInput> = makeSchema() as unknown as z.ZodType<Prisma.ItemUpdateToOneWithWhereWithoutReturnedOrdersInput>;
export const ItemUpdateToOneWithWhereWithoutReturnedOrdersInputObjectZodSchema = makeSchema();
