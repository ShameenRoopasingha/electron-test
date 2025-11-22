import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserCreateWithoutBusinessInputObjectSchema as UserCreateWithoutBusinessInputObjectSchema } from './UserCreateWithoutBusinessInput.schema';
import { UserUncheckedCreateWithoutBusinessInputObjectSchema as UserUncheckedCreateWithoutBusinessInputObjectSchema } from './UserUncheckedCreateWithoutBusinessInput.schema';
import { UserCreateOrConnectWithoutBusinessInputObjectSchema as UserCreateOrConnectWithoutBusinessInputObjectSchema } from './UserCreateOrConnectWithoutBusinessInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutBusinessInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutBusinessInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutBusinessInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutBusinessInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutBusinessInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutBusinessInput>;
export const UserCreateNestedOneWithoutBusinessInputObjectZodSchema = makeSchema();
