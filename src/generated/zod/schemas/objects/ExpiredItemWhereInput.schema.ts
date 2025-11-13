import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { ItemNullableScalarRelationFilterObjectSchema as ItemNullableScalarRelationFilterObjectSchema } from './ItemNullableScalarRelationFilter.schema';
import { ItemWhereInputObjectSchema as ItemWhereInputObjectSchema } from './ItemWhereInput.schema';
import { UserScalarRelationFilterObjectSchema as UserScalarRelationFilterObjectSchema } from './UserScalarRelationFilter.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const expireditemwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ExpiredItemWhereInputObjectSchema), z.lazy(() => ExpiredItemWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ExpiredItemWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ExpiredItemWhereInputObjectSchema), z.lazy(() => ExpiredItemWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  itemId: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  quantity: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  expirationDate: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  disposedBy: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  reason: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  item: z.union([z.lazy(() => ItemNullableScalarRelationFilterObjectSchema), z.lazy(() => ItemWhereInputObjectSchema)]).optional(),
  user: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional()
}).strict();
export const ExpiredItemWhereInputObjectSchema: z.ZodType<Prisma.ExpiredItemWhereInput> = expireditemwhereinputSchema as unknown as z.ZodType<Prisma.ExpiredItemWhereInput>;
export const ExpiredItemWhereInputObjectZodSchema = expireditemwhereinputSchema;
