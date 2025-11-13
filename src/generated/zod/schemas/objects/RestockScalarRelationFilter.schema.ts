import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RestockWhereInputObjectSchema as RestockWhereInputObjectSchema } from './RestockWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => RestockWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => RestockWhereInputObjectSchema).optional()
}).strict();
export const RestockScalarRelationFilterObjectSchema: z.ZodType<Prisma.RestockScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.RestockScalarRelationFilter>;
export const RestockScalarRelationFilterObjectZodSchema = makeSchema();
