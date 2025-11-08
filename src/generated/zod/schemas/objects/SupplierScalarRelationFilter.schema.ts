import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SupplierWhereInputObjectSchema as SupplierWhereInputObjectSchema } from './SupplierWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => SupplierWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => SupplierWhereInputObjectSchema).optional()
}).strict();
export const SupplierScalarRelationFilterObjectSchema: z.ZodType<Prisma.SupplierScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.SupplierScalarRelationFilter>;
export const SupplierScalarRelationFilterObjectZodSchema = makeSchema();
