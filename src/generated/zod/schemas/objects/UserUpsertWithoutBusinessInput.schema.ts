import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserUpdateWithoutBusinessInputObjectSchema as UserUpdateWithoutBusinessInputObjectSchema } from './UserUpdateWithoutBusinessInput.schema';
import { UserUncheckedUpdateWithoutBusinessInputObjectSchema as UserUncheckedUpdateWithoutBusinessInputObjectSchema } from './UserUncheckedUpdateWithoutBusinessInput.schema';
import { UserCreateWithoutBusinessInputObjectSchema as UserCreateWithoutBusinessInputObjectSchema } from './UserCreateWithoutBusinessInput.schema';
import { UserUncheckedCreateWithoutBusinessInputObjectSchema as UserUncheckedCreateWithoutBusinessInputObjectSchema } from './UserUncheckedCreateWithoutBusinessInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutBusinessInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutBusinessInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutBusinessInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutBusinessInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutBusinessInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutBusinessInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutBusinessInput>;
export const UserUpsertWithoutBusinessInputObjectZodSchema = makeSchema();
