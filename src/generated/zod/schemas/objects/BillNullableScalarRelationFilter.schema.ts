import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { BillWhereInputObjectSchema as BillWhereInputObjectSchema } from './BillWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => BillWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => BillWhereInputObjectSchema).optional().nullable()
}).strict();
export const BillNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.BillNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.BillNullableScalarRelationFilter>;
export const BillNullableScalarRelationFilterObjectZodSchema = makeSchema();
