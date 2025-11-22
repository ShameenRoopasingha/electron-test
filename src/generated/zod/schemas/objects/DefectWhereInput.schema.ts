import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { ItemNullableScalarRelationFilterObjectSchema as ItemNullableScalarRelationFilterObjectSchema } from './ItemNullableScalarRelationFilter.schema';
import { ItemWhereInputObjectSchema as ItemWhereInputObjectSchema } from './ItemWhereInput.schema';
import { UserScalarRelationFilterObjectSchema as UserScalarRelationFilterObjectSchema } from './UserScalarRelationFilter.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const defectwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => DefectWhereInputObjectSchema), z.lazy(() => DefectWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => DefectWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => DefectWhereInputObjectSchema), z.lazy(() => DefectWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  itemId: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  quantity: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  reason: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  reportedBy: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  item: z.union([z.lazy(() => ItemNullableScalarRelationFilterObjectSchema), z.lazy(() => ItemWhereInputObjectSchema)]).optional(),
  user: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional()
}).strict();
export const DefectWhereInputObjectSchema: z.ZodType<Prisma.DefectWhereInput> = defectwhereinputSchema as unknown as z.ZodType<Prisma.DefectWhereInput>;
export const DefectWhereInputObjectZodSchema = defectwhereinputSchema;
