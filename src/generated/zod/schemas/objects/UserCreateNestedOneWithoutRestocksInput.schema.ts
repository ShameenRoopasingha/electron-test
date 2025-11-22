import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserCreateWithoutRestocksInputObjectSchema as UserCreateWithoutRestocksInputObjectSchema } from './UserCreateWithoutRestocksInput.schema';
import { UserUncheckedCreateWithoutRestocksInputObjectSchema as UserUncheckedCreateWithoutRestocksInputObjectSchema } from './UserUncheckedCreateWithoutRestocksInput.schema';
import { UserCreateOrConnectWithoutRestocksInputObjectSchema as UserCreateOrConnectWithoutRestocksInputObjectSchema } from './UserCreateOrConnectWithoutRestocksInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutRestocksInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutRestocksInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutRestocksInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutRestocksInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutRestocksInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutRestocksInput>;
export const UserCreateNestedOneWithoutRestocksInputObjectZodSchema = makeSchema();
