import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const supplierscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => SupplierScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => SupplierScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => SupplierScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => SupplierScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => SupplierScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  email: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  phone: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  company: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  address: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const SupplierScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.SupplierScalarWhereWithAggregatesInput> = supplierscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.SupplierScalarWhereWithAggregatesInput>;
export const SupplierScalarWhereWithAggregatesInputObjectZodSchema = supplierscalarwherewithaggregatesinputSchema;
