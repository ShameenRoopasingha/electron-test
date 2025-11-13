import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RestockWhereInputObjectSchema as RestockWhereInputObjectSchema } from './RestockWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => RestockWhereInputObjectSchema).optional(),
  some: z.lazy(() => RestockWhereInputObjectSchema).optional(),
  none: z.lazy(() => RestockWhereInputObjectSchema).optional()
}).strict();
export const RestockListRelationFilterObjectSchema: z.ZodType<Prisma.RestockListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.RestockListRelationFilter>;
export const RestockListRelationFilterObjectZodSchema = makeSchema();
