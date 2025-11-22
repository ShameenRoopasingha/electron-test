import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RoleSchema } from '../enums/Role.schema';
import { BillUncheckedCreateNestedManyWithoutUserInputObjectSchema as BillUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './BillUncheckedCreateNestedManyWithoutUserInput.schema';
import { UserSessionUncheckedCreateNestedManyWithoutUserInputObjectSchema as UserSessionUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './UserSessionUncheckedCreateNestedManyWithoutUserInput.schema';
import { RestockUncheckedCreateNestedManyWithoutUserInputObjectSchema as RestockUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './RestockUncheckedCreateNestedManyWithoutUserInput.schema';
import { DefectUncheckedCreateNestedManyWithoutUserInputObjectSchema as DefectUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './DefectUncheckedCreateNestedManyWithoutUserInput.schema';
import { BusinessDetailsUncheckedCreateNestedOneWithoutOwnerInputObjectSchema as BusinessDetailsUncheckedCreateNestedOneWithoutOwnerInputObjectSchema } from './BusinessDetailsUncheckedCreateNestedOneWithoutOwnerInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  username: z.string(),
  email: z.string(),
  password: z.string(),
  role: RoleSchema.optional(),
  fname: z.string(),
  lname: z.string(),
  phone: z.string(),
  address: z.string(),
  bank_account: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  bills: z.lazy(() => BillUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  sessions: z.lazy(() => UserSessionUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  restocks: z.lazy(() => RestockUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  defects: z.lazy(() => DefectUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  business: z.lazy(() => BusinessDetailsUncheckedCreateNestedOneWithoutOwnerInputObjectSchema).optional()
}).strict();
export const UserUncheckedCreateWithoutExpiredItemsInputObjectSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutExpiredItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedCreateWithoutExpiredItemsInput>;
export const UserUncheckedCreateWithoutExpiredItemsInputObjectZodSchema = makeSchema();
