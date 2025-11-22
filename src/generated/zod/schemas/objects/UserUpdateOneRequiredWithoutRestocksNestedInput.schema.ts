import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserCreateWithoutRestocksInputObjectSchema as UserCreateWithoutRestocksInputObjectSchema } from './UserCreateWithoutRestocksInput.schema';
import { UserUncheckedCreateWithoutRestocksInputObjectSchema as UserUncheckedCreateWithoutRestocksInputObjectSchema } from './UserUncheckedCreateWithoutRestocksInput.schema';
import { UserCreateOrConnectWithoutRestocksInputObjectSchema as UserCreateOrConnectWithoutRestocksInputObjectSchema } from './UserCreateOrConnectWithoutRestocksInput.schema';
import { UserUpsertWithoutRestocksInputObjectSchema as UserUpsertWithoutRestocksInputObjectSchema } from './UserUpsertWithoutRestocksInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutRestocksInputObjectSchema as UserUpdateToOneWithWhereWithoutRestocksInputObjectSchema } from './UserUpdateToOneWithWhereWithoutRestocksInput.schema';
import { UserUpdateWithoutRestocksInputObjectSchema as UserUpdateWithoutRestocksInputObjectSchema } from './UserUpdateWithoutRestocksInput.schema';
import { UserUncheckedUpdateWithoutRestocksInputObjectSchema as UserUncheckedUpdateWithoutRestocksInputObjectSchema } from './UserUncheckedUpdateWithoutRestocksInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutRestocksInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutRestocksInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutRestocksInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutRestocksInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutRestocksInputObjectSchema), z.lazy(() => UserUpdateWithoutRestocksInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutRestocksInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutRestocksNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutRestocksNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutRestocksNestedInput>;
export const UserUpdateOneRequiredWithoutRestocksNestedInputObjectZodSchema = makeSchema();
