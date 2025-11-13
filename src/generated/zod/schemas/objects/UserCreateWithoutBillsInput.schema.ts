import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserSessionCreateNestedManyWithoutUserInputObjectSchema as UserSessionCreateNestedManyWithoutUserInputObjectSchema } from './UserSessionCreateNestedManyWithoutUserInput.schema';
import { ExpiredItemCreateNestedManyWithoutUserInputObjectSchema as ExpiredItemCreateNestedManyWithoutUserInputObjectSchema } from './ExpiredItemCreateNestedManyWithoutUserInput.schema'

const makeSchema = () => z.object({
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
  sessions: z.lazy(() => UserSessionCreateNestedManyWithoutUserInputObjectSchema).optional(),
  expiredItems: z.lazy(() => ExpiredItemCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserCreateWithoutBillsInputObjectSchema: z.ZodType<Prisma.UserCreateWithoutBillsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateWithoutBillsInput>;
export const UserCreateWithoutBillsInputObjectZodSchema = makeSchema();
