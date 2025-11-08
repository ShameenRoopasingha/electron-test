import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RestockItemWhereInputObjectSchema as RestockItemWhereInputObjectSchema } from './RestockItemWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => RestockItemWhereInputObjectSchema).optional(),
  some: z.lazy(() => RestockItemWhereInputObjectSchema).optional(),
  none: z.lazy(() => RestockItemWhereInputObjectSchema).optional()
}).strict();
export const RestockItemListRelationFilterObjectSchema: z.ZodType<Prisma.RestockItemListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.RestockItemListRelationFilter>;
export const RestockItemListRelationFilterObjectZodSchema = makeSchema();
