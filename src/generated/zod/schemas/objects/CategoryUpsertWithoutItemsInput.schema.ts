import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CategoryUpdateWithoutItemsInputObjectSchema as CategoryUpdateWithoutItemsInputObjectSchema } from './CategoryUpdateWithoutItemsInput.schema';
import { CategoryUncheckedUpdateWithoutItemsInputObjectSchema as CategoryUncheckedUpdateWithoutItemsInputObjectSchema } from './CategoryUncheckedUpdateWithoutItemsInput.schema';
import { CategoryCreateWithoutItemsInputObjectSchema as CategoryCreateWithoutItemsInputObjectSchema } from './CategoryCreateWithoutItemsInput.schema';
import { CategoryUncheckedCreateWithoutItemsInputObjectSchema as CategoryUncheckedCreateWithoutItemsInputObjectSchema } from './CategoryUncheckedCreateWithoutItemsInput.schema';
import { CategoryWhereInputObjectSchema as CategoryWhereInputObjectSchema } from './CategoryWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => CategoryUpdateWithoutItemsInputObjectSchema), z.lazy(() => CategoryUncheckedUpdateWithoutItemsInputObjectSchema)]),
  create: z.union([z.lazy(() => CategoryCreateWithoutItemsInputObjectSchema), z.lazy(() => CategoryUncheckedCreateWithoutItemsInputObjectSchema)]),
  where: z.lazy(() => CategoryWhereInputObjectSchema).optional()
}).strict();
export const CategoryUpsertWithoutItemsInputObjectSchema: z.ZodType<Prisma.CategoryUpsertWithoutItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoryUpsertWithoutItemsInput>;
export const CategoryUpsertWithoutItemsInputObjectZodSchema = makeSchema();
