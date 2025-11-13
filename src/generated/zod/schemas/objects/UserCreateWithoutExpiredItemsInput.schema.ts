import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { BillCreateNestedManyWithoutUserInputObjectSchema as BillCreateNestedManyWithoutUserInputObjectSchema } from './BillCreateNestedManyWithoutUserInput.schema';
import { UserSessionCreateNestedManyWithoutUserInputObjectSchema as UserSessionCreateNestedManyWithoutUserInputObjectSchema } from './UserSessionCreateNestedManyWithoutUserInput.schema'

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
  bills: z.lazy(() => BillCreateNestedManyWithoutUserInputObjectSchema).optional(),
  sessions: z.lazy(() => UserSessionCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserCreateWithoutExpiredItemsInputObjectSchema: z.ZodType<Prisma.UserCreateWithoutExpiredItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateWithoutExpiredItemsInput>;
export const UserCreateWithoutExpiredItemsInputObjectZodSchema = makeSchema();
