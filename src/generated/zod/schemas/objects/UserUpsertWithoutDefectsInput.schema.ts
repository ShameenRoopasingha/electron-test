import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserUpdateWithoutDefectsInputObjectSchema as UserUpdateWithoutDefectsInputObjectSchema } from './UserUpdateWithoutDefectsInput.schema';
import { UserUncheckedUpdateWithoutDefectsInputObjectSchema as UserUncheckedUpdateWithoutDefectsInputObjectSchema } from './UserUncheckedUpdateWithoutDefectsInput.schema';
import { UserCreateWithoutDefectsInputObjectSchema as UserCreateWithoutDefectsInputObjectSchema } from './UserCreateWithoutDefectsInput.schema';
import { UserUncheckedCreateWithoutDefectsInputObjectSchema as UserUncheckedCreateWithoutDefectsInputObjectSchema } from './UserUncheckedCreateWithoutDefectsInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutDefectsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutDefectsInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutDefectsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutDefectsInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutDefectsInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutDefectsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutDefectsInput>;
export const UserUpsertWithoutDefectsInputObjectZodSchema = makeSchema();
