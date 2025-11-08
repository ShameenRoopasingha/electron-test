import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserUpdateWithoutBillsInputObjectSchema as UserUpdateWithoutBillsInputObjectSchema } from './UserUpdateWithoutBillsInput.schema';
import { UserUncheckedUpdateWithoutBillsInputObjectSchema as UserUncheckedUpdateWithoutBillsInputObjectSchema } from './UserUncheckedUpdateWithoutBillsInput.schema';
import { UserCreateWithoutBillsInputObjectSchema as UserCreateWithoutBillsInputObjectSchema } from './UserCreateWithoutBillsInput.schema';
import { UserUncheckedCreateWithoutBillsInputObjectSchema as UserUncheckedCreateWithoutBillsInputObjectSchema } from './UserUncheckedCreateWithoutBillsInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutBillsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutBillsInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutBillsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutBillsInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutBillsInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutBillsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutBillsInput>;
export const UserUpsertWithoutBillsInputObjectZodSchema = makeSchema();
