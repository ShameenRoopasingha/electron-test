import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { RoleSchema } from '../enums/Role.schema';
import { EnumRoleFieldUpdateOperationsInputObjectSchema as EnumRoleFieldUpdateOperationsInputObjectSchema } from './EnumRoleFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { BillUpdateManyWithoutUserNestedInputObjectSchema as BillUpdateManyWithoutUserNestedInputObjectSchema } from './BillUpdateManyWithoutUserNestedInput.schema';
import { UserSessionUpdateManyWithoutUserNestedInputObjectSchema as UserSessionUpdateManyWithoutUserNestedInputObjectSchema } from './UserSessionUpdateManyWithoutUserNestedInput.schema';
import { RestockUpdateManyWithoutUserNestedInputObjectSchema as RestockUpdateManyWithoutUserNestedInputObjectSchema } from './RestockUpdateManyWithoutUserNestedInput.schema';
import { DefectUpdateManyWithoutUserNestedInputObjectSchema as DefectUpdateManyWithoutUserNestedInputObjectSchema } from './DefectUpdateManyWithoutUserNestedInput.schema';
import { BusinessDetailsUpdateOneWithoutOwnerNestedInputObjectSchema as BusinessDetailsUpdateOneWithoutOwnerNestedInputObjectSchema } from './BusinessDetailsUpdateOneWithoutOwnerNestedInput.schema'

const makeSchema = () => z.object({
  username: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  password: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  role: z.union([RoleSchema, z.lazy(() => EnumRoleFieldUpdateOperationsInputObjectSchema)]).optional(),
  fname: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  lname: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  phone: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  address: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  bank_account: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  bills: z.lazy(() => BillUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  sessions: z.lazy(() => UserSessionUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  restocks: z.lazy(() => RestockUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  defects: z.lazy(() => DefectUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  business: z.lazy(() => BusinessDetailsUpdateOneWithoutOwnerNestedInputObjectSchema).optional()
}).strict();
export const UserUpdateWithoutExpiredItemsInputObjectSchema: z.ZodType<Prisma.UserUpdateWithoutExpiredItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateWithoutExpiredItemsInput>;
export const UserUpdateWithoutExpiredItemsInputObjectZodSchema = makeSchema();
