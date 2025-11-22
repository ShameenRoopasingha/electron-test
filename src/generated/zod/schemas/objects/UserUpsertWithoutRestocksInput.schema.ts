import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserUpdateWithoutRestocksInputObjectSchema as UserUpdateWithoutRestocksInputObjectSchema } from './UserUpdateWithoutRestocksInput.schema';
import { UserUncheckedUpdateWithoutRestocksInputObjectSchema as UserUncheckedUpdateWithoutRestocksInputObjectSchema } from './UserUncheckedUpdateWithoutRestocksInput.schema';
import { UserCreateWithoutRestocksInputObjectSchema as UserCreateWithoutRestocksInputObjectSchema } from './UserCreateWithoutRestocksInput.schema';
import { UserUncheckedCreateWithoutRestocksInputObjectSchema as UserUncheckedCreateWithoutRestocksInputObjectSchema } from './UserUncheckedCreateWithoutRestocksInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutRestocksInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutRestocksInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutRestocksInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutRestocksInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutRestocksInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutRestocksInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutRestocksInput>;
export const UserUpsertWithoutRestocksInputObjectZodSchema = makeSchema();
