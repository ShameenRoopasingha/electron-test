import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RoleSchema } from '../enums/Role.schema';
import { BillCreateNestedManyWithoutUserInputObjectSchema as BillCreateNestedManyWithoutUserInputObjectSchema } from './BillCreateNestedManyWithoutUserInput.schema';
import { UserSessionCreateNestedManyWithoutUserInputObjectSchema as UserSessionCreateNestedManyWithoutUserInputObjectSchema } from './UserSessionCreateNestedManyWithoutUserInput.schema';
import { ExpiredItemCreateNestedManyWithoutUserInputObjectSchema as ExpiredItemCreateNestedManyWithoutUserInputObjectSchema } from './ExpiredItemCreateNestedManyWithoutUserInput.schema';
import { RestockCreateNestedManyWithoutUserInputObjectSchema as RestockCreateNestedManyWithoutUserInputObjectSchema } from './RestockCreateNestedManyWithoutUserInput.schema';
import { DefectCreateNestedManyWithoutUserInputObjectSchema as DefectCreateNestedManyWithoutUserInputObjectSchema } from './DefectCreateNestedManyWithoutUserInput.schema'

const makeSchema = () => z.object({
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
  bills: z.lazy(() => BillCreateNestedManyWithoutUserInputObjectSchema).optional(),
  sessions: z.lazy(() => UserSessionCreateNestedManyWithoutUserInputObjectSchema).optional(),
  expiredItems: z.lazy(() => ExpiredItemCreateNestedManyWithoutUserInputObjectSchema).optional(),
  restocks: z.lazy(() => RestockCreateNestedManyWithoutUserInputObjectSchema).optional(),
  defects: z.lazy(() => DefectCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserCreateWithoutBusinessInputObjectSchema: z.ZodType<Prisma.UserCreateWithoutBusinessInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateWithoutBusinessInput>;
export const UserCreateWithoutBusinessInputObjectZodSchema = makeSchema();
