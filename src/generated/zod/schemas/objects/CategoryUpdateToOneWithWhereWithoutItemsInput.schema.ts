import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CategoryWhereInputObjectSchema as CategoryWhereInputObjectSchema } from './CategoryWhereInput.schema';
import { CategoryUpdateWithoutItemsInputObjectSchema as CategoryUpdateWithoutItemsInputObjectSchema } from './CategoryUpdateWithoutItemsInput.schema';
import { CategoryUncheckedUpdateWithoutItemsInputObjectSchema as CategoryUncheckedUpdateWithoutItemsInputObjectSchema } from './CategoryUncheckedUpdateWithoutItemsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CategoryWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => CategoryUpdateWithoutItemsInputObjectSchema), z.lazy(() => CategoryUncheckedUpdateWithoutItemsInputObjectSchema)])
}).strict();
export const CategoryUpdateToOneWithWhereWithoutItemsInputObjectSchema: z.ZodType<Prisma.CategoryUpdateToOneWithWhereWithoutItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoryUpdateToOneWithWhereWithoutItemsInput>;
export const CategoryUpdateToOneWithWhereWithoutItemsInputObjectZodSchema = makeSchema();
