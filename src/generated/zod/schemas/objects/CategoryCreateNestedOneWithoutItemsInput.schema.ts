import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CategoryCreateWithoutItemsInputObjectSchema as CategoryCreateWithoutItemsInputObjectSchema } from './CategoryCreateWithoutItemsInput.schema';
import { CategoryUncheckedCreateWithoutItemsInputObjectSchema as CategoryUncheckedCreateWithoutItemsInputObjectSchema } from './CategoryUncheckedCreateWithoutItemsInput.schema';
import { CategoryCreateOrConnectWithoutItemsInputObjectSchema as CategoryCreateOrConnectWithoutItemsInputObjectSchema } from './CategoryCreateOrConnectWithoutItemsInput.schema';
import { CategoryWhereUniqueInputObjectSchema as CategoryWhereUniqueInputObjectSchema } from './CategoryWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CategoryCreateWithoutItemsInputObjectSchema), z.lazy(() => CategoryUncheckedCreateWithoutItemsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CategoryCreateOrConnectWithoutItemsInputObjectSchema).optional(),
  connect: z.lazy(() => CategoryWhereUniqueInputObjectSchema).optional()
}).strict();
export const CategoryCreateNestedOneWithoutItemsInputObjectSchema: z.ZodType<Prisma.CategoryCreateNestedOneWithoutItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoryCreateNestedOneWithoutItemsInput>;
export const CategoryCreateNestedOneWithoutItemsInputObjectZodSchema = makeSchema();
