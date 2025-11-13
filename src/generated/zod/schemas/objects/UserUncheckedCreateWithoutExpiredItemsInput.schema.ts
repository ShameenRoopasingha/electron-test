import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { BillUncheckedCreateNestedManyWithoutUserInputObjectSchema as BillUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './BillUncheckedCreateNestedManyWithoutUserInput.schema';
import { UserSessionUncheckedCreateNestedManyWithoutUserInputObjectSchema as UserSessionUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './UserSessionUncheckedCreateNestedManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  username: z.string(),
  email: z.string(),
  password: z.string(),
  role: z.string(),
  fname: z.string(),
  lname: z.string(),
  phone: z.string(),
  address: z.string(),
  bank_account: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  bills: z.lazy(() => BillUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  sessions: z.lazy(() => UserSessionUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserUncheckedCreateWithoutExpiredItemsInputObjectSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutExpiredItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedCreateWithoutExpiredItemsInput>;
export const UserUncheckedCreateWithoutExpiredItemsInputObjectZodSchema = makeSchema();
