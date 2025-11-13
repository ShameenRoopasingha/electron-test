import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutBillsInputObjectSchema as UserCreateWithoutBillsInputObjectSchema } from './UserCreateWithoutBillsInput.schema';
import { UserUncheckedCreateWithoutBillsInputObjectSchema as UserUncheckedCreateWithoutBillsInputObjectSchema } from './UserUncheckedCreateWithoutBillsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutBillsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutBillsInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutBillsInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutBillsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutBillsInput>;
export const UserCreateOrConnectWithoutBillsInputObjectZodSchema = makeSchema();
