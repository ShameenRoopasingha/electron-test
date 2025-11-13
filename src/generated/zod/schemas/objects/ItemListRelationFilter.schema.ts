import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ItemWhereInputObjectSchema as ItemWhereInputObjectSchema } from './ItemWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => ItemWhereInputObjectSchema).optional(),
  some: z.lazy(() => ItemWhereInputObjectSchema).optional(),
  none: z.lazy(() => ItemWhereInputObjectSchema).optional()
}).strict();
export const ItemListRelationFilterObjectSchema: z.ZodType<Prisma.ItemListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ItemListRelationFilter>;
export const ItemListRelationFilterObjectZodSchema = makeSchema();
