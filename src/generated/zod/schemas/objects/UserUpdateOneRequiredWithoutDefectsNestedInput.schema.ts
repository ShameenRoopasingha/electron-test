import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserCreateWithoutDefectsInputObjectSchema as UserCreateWithoutDefectsInputObjectSchema } from './UserCreateWithoutDefectsInput.schema';
import { UserUncheckedCreateWithoutDefectsInputObjectSchema as UserUncheckedCreateWithoutDefectsInputObjectSchema } from './UserUncheckedCreateWithoutDefectsInput.schema';
import { UserCreateOrConnectWithoutDefectsInputObjectSchema as UserCreateOrConnectWithoutDefectsInputObjectSchema } from './UserCreateOrConnectWithoutDefectsInput.schema';
import { UserUpsertWithoutDefectsInputObjectSchema as UserUpsertWithoutDefectsInputObjectSchema } from './UserUpsertWithoutDefectsInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutDefectsInputObjectSchema as UserUpdateToOneWithWhereWithoutDefectsInputObjectSchema } from './UserUpdateToOneWithWhereWithoutDefectsInput.schema';
import { UserUpdateWithoutDefectsInputObjectSchema as UserUpdateWithoutDefectsInputObjectSchema } from './UserUpdateWithoutDefectsInput.schema';
import { UserUncheckedUpdateWithoutDefectsInputObjectSchema as UserUncheckedUpdateWithoutDefectsInputObjectSchema } from './UserUncheckedUpdateWithoutDefectsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutDefectsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutDefectsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutDefectsInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutDefectsInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutDefectsInputObjectSchema), z.lazy(() => UserUpdateWithoutDefectsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutDefectsInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutDefectsNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutDefectsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutDefectsNestedInput>;
export const UserUpdateOneRequiredWithoutDefectsNestedInputObjectZodSchema = makeSchema();
