import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable()
}).strict();
export const CategoryUpdateWithoutItemsInputObjectSchema: z.ZodType<Prisma.CategoryUpdateWithoutItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoryUpdateWithoutItemsInput>;
export const CategoryUpdateWithoutItemsInputObjectZodSchema = makeSchema();
