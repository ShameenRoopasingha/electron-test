import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserCreateWithoutBillsInputObjectSchema as UserCreateWithoutBillsInputObjectSchema } from './UserCreateWithoutBillsInput.schema';
import { UserUncheckedCreateWithoutBillsInputObjectSchema as UserUncheckedCreateWithoutBillsInputObjectSchema } from './UserUncheckedCreateWithoutBillsInput.schema';
import { UserCreateOrConnectWithoutBillsInputObjectSchema as UserCreateOrConnectWithoutBillsInputObjectSchema } from './UserCreateOrConnectWithoutBillsInput.schema';
import { UserUpsertWithoutBillsInputObjectSchema as UserUpsertWithoutBillsInputObjectSchema } from './UserUpsertWithoutBillsInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutBillsInputObjectSchema as UserUpdateToOneWithWhereWithoutBillsInputObjectSchema } from './UserUpdateToOneWithWhereWithoutBillsInput.schema';
import { UserUpdateWithoutBillsInputObjectSchema as UserUpdateWithoutBillsInputObjectSchema } from './UserUpdateWithoutBillsInput.schema';
import { UserUncheckedUpdateWithoutBillsInputObjectSchema as UserUncheckedUpdateWithoutBillsInputObjectSchema } from './UserUncheckedUpdateWithoutBillsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutBillsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutBillsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutBillsInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutBillsInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutBillsInputObjectSchema), z.lazy(() => UserUpdateWithoutBillsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutBillsInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutBillsNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutBillsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutBillsNestedInput>;
export const UserUpdateOneRequiredWithoutBillsNestedInputObjectZodSchema = makeSchema();
