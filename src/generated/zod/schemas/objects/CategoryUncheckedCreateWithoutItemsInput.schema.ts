import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  name: z.string(),
  description: z.string().optional().nullable()
}).strict();
export const CategoryUncheckedCreateWithoutItemsInputObjectSchema: z.ZodType<Prisma.CategoryUncheckedCreateWithoutItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoryUncheckedCreateWithoutItemsInput>;
export const CategoryUncheckedCreateWithoutItemsInputObjectZodSchema = makeSchema();
