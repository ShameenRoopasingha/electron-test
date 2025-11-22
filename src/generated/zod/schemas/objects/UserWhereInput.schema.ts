import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { EnumRoleFilterObjectSchema as EnumRoleFilterObjectSchema } from './EnumRoleFilter.schema';
import { RoleSchema } from '../enums/Role.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BillListRelationFilterObjectSchema as BillListRelationFilterObjectSchema } from './BillListRelationFilter.schema';
import { UserSessionListRelationFilterObjectSchema as UserSessionListRelationFilterObjectSchema } from './UserSessionListRelationFilter.schema';
import { ExpiredItemListRelationFilterObjectSchema as ExpiredItemListRelationFilterObjectSchema } from './ExpiredItemListRelationFilter.schema';
import { RestockListRelationFilterObjectSchema as RestockListRelationFilterObjectSchema } from './RestockListRelationFilter.schema';
import { DefectListRelationFilterObjectSchema as DefectListRelationFilterObjectSchema } from './DefectListRelationFilter.schema';
import { BusinessDetailsNullableScalarRelationFilterObjectSchema as BusinessDetailsNullableScalarRelationFilterObjectSchema } from './BusinessDetailsNullableScalarRelationFilter.schema';
import { BusinessDetailsWhereInputObjectSchema as BusinessDetailsWhereInputObjectSchema } from './BusinessDetailsWhereInput.schema'

const userwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => UserWhereInputObjectSchema), z.lazy(() => UserWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => UserWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => UserWhereInputObjectSchema), z.lazy(() => UserWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  username: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  email: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  password: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  role: z.union([z.lazy(() => EnumRoleFilterObjectSchema), RoleSchema]).optional(),
  fname: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  lname: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  phone: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  address: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  bank_account: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  bills: z.lazy(() => BillListRelationFilterObjectSchema).optional(),
  sessions: z.lazy(() => UserSessionListRelationFilterObjectSchema).optional(),
  expiredItems: z.lazy(() => ExpiredItemListRelationFilterObjectSchema).optional(),
  restocks: z.lazy(() => RestockListRelationFilterObjectSchema).optional(),
  defects: z.lazy(() => DefectListRelationFilterObjectSchema).optional(),
  business: z.union([z.lazy(() => BusinessDetailsNullableScalarRelationFilterObjectSchema), z.lazy(() => BusinessDetailsWhereInputObjectSchema)]).optional()
}).strict();
export const UserWhereInputObjectSchema: z.ZodType<Prisma.UserWhereInput> = userwhereinputSchema as unknown as z.ZodType<Prisma.UserWhereInput>;
export const UserWhereInputObjectZodSchema = userwhereinputSchema;
