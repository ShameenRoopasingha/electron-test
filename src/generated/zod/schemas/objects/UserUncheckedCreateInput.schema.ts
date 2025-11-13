import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { BillUncheckedCreateNestedManyWithoutUserInputObjectSchema as BillUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './BillUncheckedCreateNestedManyWithoutUserInput.schema';
import { UserSessionUncheckedCreateNestedManyWithoutUserInputObjectSchema as UserSessionUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './UserSessionUncheckedCreateNestedManyWithoutUserInput.schema';
import { ExpiredItemUncheckedCreateNestedManyWithoutUserInputObjectSchema as ExpiredItemUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './ExpiredItemUncheckedCreateNestedManyWithoutUserInput.schema'

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
  bills: z.lazy(() => BillUncheckedCreateNestedManyWithoutUserInputObjectSchema),
  sessions: z.lazy(() => UserSessionUncheckedCreateNestedManyWithoutUserInputObjectSchema),
  expiredItems: z.lazy(() => ExpiredItemUncheckedCreateNestedManyWithoutUserInputObjectSchema)
}).strict();
export const UserUncheckedCreateInputObjectSchema: z.ZodType<Prisma.UserUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedCreateInput>;
export const UserUncheckedCreateInputObjectZodSchema = makeSchema();
