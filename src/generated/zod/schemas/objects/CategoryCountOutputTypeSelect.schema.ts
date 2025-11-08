import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CategoryCountOutputTypeCountItemsArgsObjectSchema as CategoryCountOutputTypeCountItemsArgsObjectSchema } from './CategoryCountOutputTypeCountItemsArgs.schema'

const makeSchema = () => z.object({
  items: z.union([z.boolean(), z.lazy(() => CategoryCountOutputTypeCountItemsArgsObjectSchema)]).optional()
}).strict();
export const CategoryCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.CategoryCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.CategoryCountOutputTypeSelect>;
export const CategoryCountOutputTypeSelectObjectZodSchema = makeSchema();
