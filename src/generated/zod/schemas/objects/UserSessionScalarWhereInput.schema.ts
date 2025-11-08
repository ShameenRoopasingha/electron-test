import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema'

const usersessionscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => UserSessionScalarWhereInputObjectSchema), z.lazy(() => UserSessionScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => UserSessionScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => UserSessionScalarWhereInputObjectSchema), z.lazy(() => UserSessionScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  userId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  token: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  ipAddress: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  deviceInfo: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  loginTime: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  logoutTime: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  isActive: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional()
}).strict();
export const UserSessionScalarWhereInputObjectSchema: z.ZodType<Prisma.UserSessionScalarWhereInput> = usersessionscalarwhereinputSchema as unknown as z.ZodType<Prisma.UserSessionScalarWhereInput>;
export const UserSessionScalarWhereInputObjectZodSchema = usersessionscalarwhereinputSchema;
