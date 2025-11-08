import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { ItemUpdateManyWithoutCategoryNestedInputObjectSchema as ItemUpdateManyWithoutCategoryNestedInputObjectSchema } from './ItemUpdateManyWithoutCategoryNestedInput.schema'

const makeSchema = () => z.object({
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  items: z.lazy(() => ItemUpdateManyWithoutCategoryNestedInputObjectSchema).optional()
}).strict();
export const CategoryUpdateInputObjectSchema: z.ZodType<Prisma.CategoryUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoryUpdateInput>;
export const CategoryUpdateInputObjectZodSchema = makeSchema();
