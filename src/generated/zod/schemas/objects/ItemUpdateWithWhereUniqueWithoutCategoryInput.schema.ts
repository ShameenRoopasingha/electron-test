import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ItemWhereUniqueInputObjectSchema as ItemWhereUniqueInputObjectSchema } from './ItemWhereUniqueInput.schema';
import { ItemUpdateWithoutCategoryInputObjectSchema as ItemUpdateWithoutCategoryInputObjectSchema } from './ItemUpdateWithoutCategoryInput.schema';
import { ItemUncheckedUpdateWithoutCategoryInputObjectSchema as ItemUncheckedUpdateWithoutCategoryInputObjectSchema } from './ItemUncheckedUpdateWithoutCategoryInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ItemWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ItemUpdateWithoutCategoryInputObjectSchema), z.lazy(() => ItemUncheckedUpdateWithoutCategoryInputObjectSchema)])
}).strict();
export const ItemUpdateWithWhereUniqueWithoutCategoryInputObjectSchema: z.ZodType<Prisma.ItemUpdateWithWhereUniqueWithoutCategoryInput> = makeSchema() as unknown as z.ZodType<Prisma.ItemUpdateWithWhereUniqueWithoutCategoryInput>;
export const ItemUpdateWithWhereUniqueWithoutCategoryInputObjectZodSchema = makeSchema();
