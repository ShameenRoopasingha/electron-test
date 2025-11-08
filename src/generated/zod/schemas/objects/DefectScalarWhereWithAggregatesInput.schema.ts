import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { IntNullableWithAggregatesFilterObjectSchema as IntNullableWithAggregatesFilterObjectSchema } from './IntNullableWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const defectscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => DefectScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => DefectScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => DefectScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => DefectScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => DefectScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  itemId: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  quantity: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  reason: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  reportedBy: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const DefectScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.DefectScalarWhereWithAggregatesInput> = defectscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.DefectScalarWhereWithAggregatesInput>;
export const DefectScalarWhereWithAggregatesInputObjectZodSchema = defectscalarwherewithaggregatesinputSchema;
