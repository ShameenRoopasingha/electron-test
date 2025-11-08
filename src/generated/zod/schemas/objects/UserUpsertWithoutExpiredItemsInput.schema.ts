import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserUpdateWithoutExpiredItemsInputObjectSchema as UserUpdateWithoutExpiredItemsInputObjectSchema } from './UserUpdateWithoutExpiredItemsInput.schema';
import { UserUncheckedUpdateWithoutExpiredItemsInputObjectSchema as UserUncheckedUpdateWithoutExpiredItemsInputObjectSchema } from './UserUncheckedUpdateWithoutExpiredItemsInput.schema';
import { UserCreateWithoutExpiredItemsInputObjectSchema as UserCreateWithoutExpiredItemsInputObjectSchema } from './UserCreateWithoutExpiredItemsInput.schema';
import { UserUncheckedCreateWithoutExpiredItemsInputObjectSchema as UserUncheckedCreateWithoutExpiredItemsInputObjectSchema } from './UserUncheckedCreateWithoutExpiredItemsInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutExpiredItemsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutExpiredItemsInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutExpiredItemsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutExpiredItemsInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutExpiredItemsInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutExpiredItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutExpiredItemsInput>;
export const UserUpsertWithoutExpiredItemsInputObjectZodSchema = makeSchema();
