import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ItemScalarWhereInputObjectSchema as ItemScalarWhereInputObjectSchema } from './ItemScalarWhereInput.schema';
import { ItemUpdateManyMutationInputObjectSchema as ItemUpdateManyMutationInputObjectSchema } from './ItemUpdateManyMutationInput.schema';
import { ItemUncheckedUpdateManyWithoutCategoryInputObjectSchema as ItemUncheckedUpdateManyWithoutCategoryInputObjectSchema } from './ItemUncheckedUpdateManyWithoutCategoryInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ItemScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ItemUpdateManyMutationInputObjectSchema), z.lazy(() => ItemUncheckedUpdateManyWithoutCategoryInputObjectSchema)])
}).strict();
export const ItemUpdateManyWithWhereWithoutCategoryInputObjectSchema: z.ZodType<Prisma.ItemUpdateManyWithWhereWithoutCategoryInput> = makeSchema() as unknown as z.ZodType<Prisma.ItemUpdateManyWithWhereWithoutCategoryInput>;
export const ItemUpdateManyWithWhereWithoutCategoryInputObjectZodSchema = makeSchema();
