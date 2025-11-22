import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { UserScalarRelationFilterObjectSchema as UserScalarRelationFilterObjectSchema } from './UserScalarRelationFilter.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const businessdetailswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => BusinessDetailsWhereInputObjectSchema), z.lazy(() => BusinessDetailsWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => BusinessDetailsWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => BusinessDetailsWhereInputObjectSchema), z.lazy(() => BusinessDetailsWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  registrationNumber: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  address: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  email: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  phone: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  logoUrl: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  ownerId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  owner: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional()
}).strict();
export const BusinessDetailsWhereInputObjectSchema: z.ZodType<Prisma.BusinessDetailsWhereInput> = businessdetailswhereinputSchema as unknown as z.ZodType<Prisma.BusinessDetailsWhereInput>;
export const BusinessDetailsWhereInputObjectZodSchema = businessdetailswhereinputSchema;
