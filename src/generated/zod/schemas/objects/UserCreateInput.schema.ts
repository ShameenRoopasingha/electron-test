import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { BillCreateNestedManyWithoutUserInputObjectSchema as BillCreateNestedManyWithoutUserInputObjectSchema } from './BillCreateNestedManyWithoutUserInput.schema';
import { UserSessionCreateNestedManyWithoutUserInputObjectSchema as UserSessionCreateNestedManyWithoutUserInputObjectSchema } from './UserSessionCreateNestedManyWithoutUserInput.schema';
import { ExpiredItemCreateNestedManyWithoutUserInputObjectSchema as ExpiredItemCreateNestedManyWithoutUserInputObjectSchema } from './ExpiredItemCreateNestedManyWithoutUserInput.schema'

const makeSchema = () => z.object({
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
  bills: z.lazy(() => BillCreateNestedManyWithoutUserInputObjectSchema),
  sessions: z.lazy(() => UserSessionCreateNestedManyWithoutUserInputObjectSchema),
  expiredItems: z.lazy(() => ExpiredItemCreateNestedManyWithoutUserInputObjectSchema)
}).strict();
export const UserCreateInputObjectSchema: z.ZodType<Prisma.UserCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateInput>;
export const UserCreateInputObjectZodSchema = makeSchema();
