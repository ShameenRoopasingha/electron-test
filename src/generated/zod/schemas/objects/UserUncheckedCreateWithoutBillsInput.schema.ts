import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserSessionUncheckedCreateNestedManyWithoutUserInputObjectSchema as UserSessionUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './UserSessionUncheckedCreateNestedManyWithoutUserInput.schema';
import { ExpiredItemUncheckedCreateNestedManyWithoutUserInputObjectSchema as ExpiredItemUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './ExpiredItemUncheckedCreateNestedManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  username: z.string(),
  email: z.string(),
  passwordHash: z.string(),
  role: z.string(),
  fname: z.string(),
  lname: z.string(),
  phone: z.string(),
  address: z.string(),
  bank_account: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  sessions: z.lazy(() => UserSessionUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  expiredItems: z.lazy(() => ExpiredItemUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserUncheckedCreateWithoutBillsInputObjectSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutBillsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedCreateWithoutBillsInput>;
export const UserUncheckedCreateWithoutBillsInputObjectZodSchema = makeSchema();
