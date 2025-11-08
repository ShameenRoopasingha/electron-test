import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  name: z.string(),
  description: z.string().optional().nullable()
}).strict();
export const CategoryCreateWithoutItemsInputObjectSchema: z.ZodType<Prisma.CategoryCreateWithoutItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoryCreateWithoutItemsInput>;
export const CategoryCreateWithoutItemsInputObjectZodSchema = makeSchema();
