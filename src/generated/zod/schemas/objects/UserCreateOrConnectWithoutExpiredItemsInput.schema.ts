import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutExpiredItemsInputObjectSchema as UserCreateWithoutExpiredItemsInputObjectSchema } from './UserCreateWithoutExpiredItemsInput.schema';
import { UserUncheckedCreateWithoutExpiredItemsInputObjectSchema as UserUncheckedCreateWithoutExpiredItemsInputObjectSchema } from './UserUncheckedCreateWithoutExpiredItemsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutExpiredItemsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutExpiredItemsInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutExpiredItemsInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutExpiredItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutExpiredItemsInput>;
export const UserCreateOrConnectWithoutExpiredItemsInputObjectZodSchema = makeSchema();
