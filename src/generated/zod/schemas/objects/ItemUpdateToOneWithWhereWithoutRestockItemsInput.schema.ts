import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ItemWhereInputObjectSchema as ItemWhereInputObjectSchema } from './ItemWhereInput.schema';
import { ItemUpdateWithoutRestockItemsInputObjectSchema as ItemUpdateWithoutRestockItemsInputObjectSchema } from './ItemUpdateWithoutRestockItemsInput.schema';
import { ItemUncheckedUpdateWithoutRestockItemsInputObjectSchema as ItemUncheckedUpdateWithoutRestockItemsInputObjectSchema } from './ItemUncheckedUpdateWithoutRestockItemsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ItemWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ItemUpdateWithoutRestockItemsInputObjectSchema), z.lazy(() => ItemUncheckedUpdateWithoutRestockItemsInputObjectSchema)])
}).strict();
export const ItemUpdateToOneWithWhereWithoutRestockItemsInputObjectSchema: z.ZodType<Prisma.ItemUpdateToOneWithWhereWithoutRestockItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.ItemUpdateToOneWithWhereWithoutRestockItemsInput>;
export const ItemUpdateToOneWithWhereWithoutRestockItemsInputObjectZodSchema = makeSchema();
