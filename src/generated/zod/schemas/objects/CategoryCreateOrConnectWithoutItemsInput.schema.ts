import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CategoryWhereUniqueInputObjectSchema as CategoryWhereUniqueInputObjectSchema } from './CategoryWhereUniqueInput.schema';
import { CategoryCreateWithoutItemsInputObjectSchema as CategoryCreateWithoutItemsInputObjectSchema } from './CategoryCreateWithoutItemsInput.schema';
import { CategoryUncheckedCreateWithoutItemsInputObjectSchema as CategoryUncheckedCreateWithoutItemsInputObjectSchema } from './CategoryUncheckedCreateWithoutItemsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CategoryWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CategoryCreateWithoutItemsInputObjectSchema), z.lazy(() => CategoryUncheckedCreateWithoutItemsInputObjectSchema)])
}).strict();
export const CategoryCreateOrConnectWithoutItemsInputObjectSchema: z.ZodType<Prisma.CategoryCreateOrConnectWithoutItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoryCreateOrConnectWithoutItemsInput>;
export const CategoryCreateOrConnectWithoutItemsInputObjectZodSchema = makeSchema();
