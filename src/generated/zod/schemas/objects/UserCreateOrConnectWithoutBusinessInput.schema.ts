import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutBusinessInputObjectSchema as UserCreateWithoutBusinessInputObjectSchema } from './UserCreateWithoutBusinessInput.schema';
import { UserUncheckedCreateWithoutBusinessInputObjectSchema as UserUncheckedCreateWithoutBusinessInputObjectSchema } from './UserUncheckedCreateWithoutBusinessInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutBusinessInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutBusinessInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutBusinessInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutBusinessInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutBusinessInput>;
export const UserCreateOrConnectWithoutBusinessInputObjectZodSchema = makeSchema();
