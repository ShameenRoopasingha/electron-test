import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const defectscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => DefectScalarWhereInputObjectSchema), z.lazy(() => DefectScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => DefectScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => DefectScalarWhereInputObjectSchema), z.lazy(() => DefectScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  itemId: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  quantity: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  reason: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  reportedBy: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const DefectScalarWhereInputObjectSchema: z.ZodType<Prisma.DefectScalarWhereInput> = defectscalarwhereinputSchema as unknown as z.ZodType<Prisma.DefectScalarWhereInput>;
export const DefectScalarWhereInputObjectZodSchema = defectscalarwhereinputSchema;
