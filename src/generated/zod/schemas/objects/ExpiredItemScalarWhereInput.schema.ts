import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema'

const expireditemscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ExpiredItemScalarWhereInputObjectSchema), z.lazy(() => ExpiredItemScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ExpiredItemScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ExpiredItemScalarWhereInputObjectSchema), z.lazy(() => ExpiredItemScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  itemId: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  quantity: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  expirationDate: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  disposedBy: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  reason: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const ExpiredItemScalarWhereInputObjectSchema: z.ZodType<Prisma.ExpiredItemScalarWhereInput> = expireditemscalarwhereinputSchema as unknown as z.ZodType<Prisma.ExpiredItemScalarWhereInput>;
export const ExpiredItemScalarWhereInputObjectZodSchema = expireditemscalarwhereinputSchema;
