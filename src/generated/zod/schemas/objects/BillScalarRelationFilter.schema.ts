import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { BillWhereInputObjectSchema as BillWhereInputObjectSchema } from './BillWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => BillWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => BillWhereInputObjectSchema).optional()
}).strict();
export const BillScalarRelationFilterObjectSchema: z.ZodType<Prisma.BillScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.BillScalarRelationFilter>;
export const BillScalarRelationFilterObjectZodSchema = makeSchema();
