import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ExpiredItemWhereInputObjectSchema as ExpiredItemWhereInputObjectSchema } from './ExpiredItemWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => ExpiredItemWhereInputObjectSchema).optional(),
  some: z.lazy(() => ExpiredItemWhereInputObjectSchema).optional(),
  none: z.lazy(() => ExpiredItemWhereInputObjectSchema).optional()
}).strict();
export const ExpiredItemListRelationFilterObjectSchema: z.ZodType<Prisma.ExpiredItemListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ExpiredItemListRelationFilter>;
export const ExpiredItemListRelationFilterObjectZodSchema = makeSchema();
