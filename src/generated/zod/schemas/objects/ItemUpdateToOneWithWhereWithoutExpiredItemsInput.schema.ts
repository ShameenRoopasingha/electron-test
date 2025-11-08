import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ItemWhereInputObjectSchema as ItemWhereInputObjectSchema } from './ItemWhereInput.schema';
import { ItemUpdateWithoutExpiredItemsInputObjectSchema as ItemUpdateWithoutExpiredItemsInputObjectSchema } from './ItemUpdateWithoutExpiredItemsInput.schema';
import { ItemUncheckedUpdateWithoutExpiredItemsInputObjectSchema as ItemUncheckedUpdateWithoutExpiredItemsInputObjectSchema } from './ItemUncheckedUpdateWithoutExpiredItemsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ItemWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ItemUpdateWithoutExpiredItemsInputObjectSchema), z.lazy(() => ItemUncheckedUpdateWithoutExpiredItemsInputObjectSchema)])
}).strict();
export const ItemUpdateToOneWithWhereWithoutExpiredItemsInputObjectSchema: z.ZodType<Prisma.ItemUpdateToOneWithWhereWithoutExpiredItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.ItemUpdateToOneWithWhereWithoutExpiredItemsInput>;
export const ItemUpdateToOneWithWhereWithoutExpiredItemsInputObjectZodSchema = makeSchema();
