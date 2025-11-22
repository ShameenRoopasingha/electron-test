import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserCreateWithoutBusinessInputObjectSchema as UserCreateWithoutBusinessInputObjectSchema } from './UserCreateWithoutBusinessInput.schema';
import { UserUncheckedCreateWithoutBusinessInputObjectSchema as UserUncheckedCreateWithoutBusinessInputObjectSchema } from './UserUncheckedCreateWithoutBusinessInput.schema';
import { UserCreateOrConnectWithoutBusinessInputObjectSchema as UserCreateOrConnectWithoutBusinessInputObjectSchema } from './UserCreateOrConnectWithoutBusinessInput.schema';
import { UserUpsertWithoutBusinessInputObjectSchema as UserUpsertWithoutBusinessInputObjectSchema } from './UserUpsertWithoutBusinessInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutBusinessInputObjectSchema as UserUpdateToOneWithWhereWithoutBusinessInputObjectSchema } from './UserUpdateToOneWithWhereWithoutBusinessInput.schema';
import { UserUpdateWithoutBusinessInputObjectSchema as UserUpdateWithoutBusinessInputObjectSchema } from './UserUpdateWithoutBusinessInput.schema';
import { UserUncheckedUpdateWithoutBusinessInputObjectSchema as UserUncheckedUpdateWithoutBusinessInputObjectSchema } from './UserUncheckedUpdateWithoutBusinessInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutBusinessInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutBusinessInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutBusinessInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutBusinessInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutBusinessInputObjectSchema), z.lazy(() => UserUpdateWithoutBusinessInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutBusinessInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutBusinessNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutBusinessNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutBusinessNestedInput>;
export const UserUpdateOneRequiredWithoutBusinessNestedInputObjectZodSchema = makeSchema();
