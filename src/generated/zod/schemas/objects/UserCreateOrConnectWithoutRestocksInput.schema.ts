import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutRestocksInputObjectSchema as UserCreateWithoutRestocksInputObjectSchema } from './UserCreateWithoutRestocksInput.schema';
import { UserUncheckedCreateWithoutRestocksInputObjectSchema as UserUncheckedCreateWithoutRestocksInputObjectSchema } from './UserUncheckedCreateWithoutRestocksInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutRestocksInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutRestocksInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutRestocksInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutRestocksInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutRestocksInput>;
export const UserCreateOrConnectWithoutRestocksInputObjectZodSchema = makeSchema();
