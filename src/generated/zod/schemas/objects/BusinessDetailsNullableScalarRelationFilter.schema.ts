import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { BusinessDetailsWhereInputObjectSchema as BusinessDetailsWhereInputObjectSchema } from './BusinessDetailsWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => BusinessDetailsWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => BusinessDetailsWhereInputObjectSchema).optional().nullable()
}).strict();
export const BusinessDetailsNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.BusinessDetailsNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.BusinessDetailsNullableScalarRelationFilter>;
export const BusinessDetailsNullableScalarRelationFilterObjectZodSchema = makeSchema();
