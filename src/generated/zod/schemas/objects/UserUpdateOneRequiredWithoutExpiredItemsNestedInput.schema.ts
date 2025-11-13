import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserCreateWithoutExpiredItemsInputObjectSchema as UserCreateWithoutExpiredItemsInputObjectSchema } from './UserCreateWithoutExpiredItemsInput.schema';
import { UserUncheckedCreateWithoutExpiredItemsInputObjectSchema as UserUncheckedCreateWithoutExpiredItemsInputObjectSchema } from './UserUncheckedCreateWithoutExpiredItemsInput.schema';
import { UserCreateOrConnectWithoutExpiredItemsInputObjectSchema as UserCreateOrConnectWithoutExpiredItemsInputObjectSchema } from './UserCreateOrConnectWithoutExpiredItemsInput.schema';
import { UserUpsertWithoutExpiredItemsInputObjectSchema as UserUpsertWithoutExpiredItemsInputObjectSchema } from './UserUpsertWithoutExpiredItemsInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutExpiredItemsInputObjectSchema as UserUpdateToOneWithWhereWithoutExpiredItemsInputObjectSchema } from './UserUpdateToOneWithWhereWithoutExpiredItemsInput.schema';
import { UserUpdateWithoutExpiredItemsInputObjectSchema as UserUpdateWithoutExpiredItemsInputObjectSchema } from './UserUpdateWithoutExpiredItemsInput.schema';
import { UserUncheckedUpdateWithoutExpiredItemsInputObjectSchema as UserUncheckedUpdateWithoutExpiredItemsInputObjectSchema } from './UserUncheckedUpdateWithoutExpiredItemsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutExpiredItemsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutExpiredItemsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutExpiredItemsInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutExpiredItemsInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutExpiredItemsInputObjectSchema), z.lazy(() => UserUpdateWithoutExpiredItemsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutExpiredItemsInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutExpiredItemsNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutExpiredItemsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutExpiredItemsNestedInput>;
export const UserUpdateOneRequiredWithoutExpiredItemsNestedInputObjectZodSchema = makeSchema();
