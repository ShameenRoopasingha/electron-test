import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ItemCreateNestedManyWithoutCategoryInputObjectSchema as ItemCreateNestedManyWithoutCategoryInputObjectSchema } from './ItemCreateNestedManyWithoutCategoryInput.schema'

const makeSchema = () => z.object({
  name: z.string(),
  description: z.string().optional().nullable(),
  items: z.lazy(() => ItemCreateNestedManyWithoutCategoryInputObjectSchema)
}).strict();
export const CategoryCreateInputObjectSchema: z.ZodType<Prisma.CategoryCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoryCreateInput>;
export const CategoryCreateInputObjectZodSchema = makeSchema();
