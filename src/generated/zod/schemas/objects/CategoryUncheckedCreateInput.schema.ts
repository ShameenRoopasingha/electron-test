import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ItemUncheckedCreateNestedManyWithoutCategoryInputObjectSchema as ItemUncheckedCreateNestedManyWithoutCategoryInputObjectSchema } from './ItemUncheckedCreateNestedManyWithoutCategoryInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  items: z.lazy(() => ItemUncheckedCreateNestedManyWithoutCategoryInputObjectSchema)
}).strict();
export const CategoryUncheckedCreateInputObjectSchema: z.ZodType<Prisma.CategoryUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoryUncheckedCreateInput>;
export const CategoryUncheckedCreateInputObjectZodSchema = makeSchema();
