import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const businessdetailsscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => BusinessDetailsScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => BusinessDetailsScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => BusinessDetailsScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => BusinessDetailsScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => BusinessDetailsScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  registrationNumber: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  address: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  email: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  phone: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  logoUrl: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  ownerId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const BusinessDetailsScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.BusinessDetailsScalarWhereWithAggregatesInput> = businessdetailsscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.BusinessDetailsScalarWhereWithAggregatesInput>;
export const BusinessDetailsScalarWhereWithAggregatesInputObjectZodSchema = businessdetailsscalarwherewithaggregatesinputSchema;
