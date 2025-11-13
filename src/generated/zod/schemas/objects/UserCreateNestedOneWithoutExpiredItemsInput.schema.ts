import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserCreateWithoutExpiredItemsInputObjectSchema as UserCreateWithoutExpiredItemsInputObjectSchema } from './UserCreateWithoutExpiredItemsInput.schema';
import { UserUncheckedCreateWithoutExpiredItemsInputObjectSchema as UserUncheckedCreateWithoutExpiredItemsInputObjectSchema } from './UserUncheckedCreateWithoutExpiredItemsInput.schema';
import { UserCreateOrConnectWithoutExpiredItemsInputObjectSchema as UserCreateOrConnectWithoutExpiredItemsInputObjectSchema } from './UserCreateOrConnectWithoutExpiredItemsInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutExpiredItemsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutExpiredItemsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutExpiredItemsInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutExpiredItemsInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutExpiredItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutExpiredItemsInput>;
export const UserCreateNestedOneWithoutExpiredItemsInputObjectZodSchema = makeSchema();
