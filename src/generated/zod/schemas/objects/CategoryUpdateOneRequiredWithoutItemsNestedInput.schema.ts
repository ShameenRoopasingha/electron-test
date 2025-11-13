import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CategoryCreateWithoutItemsInputObjectSchema as CategoryCreateWithoutItemsInputObjectSchema } from './CategoryCreateWithoutItemsInput.schema';
import { CategoryUncheckedCreateWithoutItemsInputObjectSchema as CategoryUncheckedCreateWithoutItemsInputObjectSchema } from './CategoryUncheckedCreateWithoutItemsInput.schema';
import { CategoryCreateOrConnectWithoutItemsInputObjectSchema as CategoryCreateOrConnectWithoutItemsInputObjectSchema } from './CategoryCreateOrConnectWithoutItemsInput.schema';
import { CategoryUpsertWithoutItemsInputObjectSchema as CategoryUpsertWithoutItemsInputObjectSchema } from './CategoryUpsertWithoutItemsInput.schema';
import { CategoryWhereUniqueInputObjectSchema as CategoryWhereUniqueInputObjectSchema } from './CategoryWhereUniqueInput.schema';
import { CategoryUpdateToOneWithWhereWithoutItemsInputObjectSchema as CategoryUpdateToOneWithWhereWithoutItemsInputObjectSchema } from './CategoryUpdateToOneWithWhereWithoutItemsInput.schema';
import { CategoryUpdateWithoutItemsInputObjectSchema as CategoryUpdateWithoutItemsInputObjectSchema } from './CategoryUpdateWithoutItemsInput.schema';
import { CategoryUncheckedUpdateWithoutItemsInputObjectSchema as CategoryUncheckedUpdateWithoutItemsInputObjectSchema } from './CategoryUncheckedUpdateWithoutItemsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CategoryCreateWithoutItemsInputObjectSchema), z.lazy(() => CategoryUncheckedCreateWithoutItemsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CategoryCreateOrConnectWithoutItemsInputObjectSchema).optional(),
  upsert: z.lazy(() => CategoryUpsertWithoutItemsInputObjectSchema).optional(),
  connect: z.lazy(() => CategoryWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => CategoryUpdateToOneWithWhereWithoutItemsInputObjectSchema), z.lazy(() => CategoryUpdateWithoutItemsInputObjectSchema), z.lazy(() => CategoryUncheckedUpdateWithoutItemsInputObjectSchema)]).optional()
}).strict();
export const CategoryUpdateOneRequiredWithoutItemsNestedInputObjectSchema: z.ZodType<Prisma.CategoryUpdateOneRequiredWithoutItemsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoryUpdateOneRequiredWithoutItemsNestedInput>;
export const CategoryUpdateOneRequiredWithoutItemsNestedInputObjectZodSchema = makeSchema();
