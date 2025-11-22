import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { RoleSchema } from '../enums/Role.schema';
import { EnumRoleFieldUpdateOperationsInputObjectSchema as EnumRoleFieldUpdateOperationsInputObjectSchema } from './EnumRoleFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { BillUncheckedUpdateManyWithoutUserNestedInputObjectSchema as BillUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './BillUncheckedUpdateManyWithoutUserNestedInput.schema';
import { UserSessionUncheckedUpdateManyWithoutUserNestedInputObjectSchema as UserSessionUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './UserSessionUncheckedUpdateManyWithoutUserNestedInput.schema';
import { ExpiredItemUncheckedUpdateManyWithoutUserNestedInputObjectSchema as ExpiredItemUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './ExpiredItemUncheckedUpdateManyWithoutUserNestedInput.schema';
import { RestockUncheckedUpdateManyWithoutUserNestedInputObjectSchema as RestockUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './RestockUncheckedUpdateManyWithoutUserNestedInput.schema';
import { BusinessDetailsUncheckedUpdateOneWithoutOwnerNestedInputObjectSchema as BusinessDetailsUncheckedUpdateOneWithoutOwnerNestedInputObjectSchema } from './BusinessDetailsUncheckedUpdateOneWithoutOwnerNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
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
  bills: z.lazy(() => BillUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  sessions: z.lazy(() => UserSessionUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  expiredItems: z.lazy(() => ExpiredItemUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  restocks: z.lazy(() => RestockUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  business: z.lazy(() => BusinessDetailsUncheckedUpdateOneWithoutOwnerNestedInputObjectSchema).optional()
}).strict();
export const UserUncheckedUpdateWithoutDefectsInputObjectSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutDefectsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedUpdateWithoutDefectsInput>;
export const UserUncheckedUpdateWithoutDefectsInputObjectZodSchema = makeSchema();
