import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserCreateWithoutBillsInputObjectSchema as UserCreateWithoutBillsInputObjectSchema } from './UserCreateWithoutBillsInput.schema';
import { UserUncheckedCreateWithoutBillsInputObjectSchema as UserUncheckedCreateWithoutBillsInputObjectSchema } from './UserUncheckedCreateWithoutBillsInput.schema';
import { UserCreateOrConnectWithoutBillsInputObjectSchema as UserCreateOrConnectWithoutBillsInputObjectSchema } from './UserCreateOrConnectWithoutBillsInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutBillsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutBillsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutBillsInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutBillsInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutBillsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutBillsInput>;
export const UserCreateNestedOneWithoutBillsInputObjectZodSchema = makeSchema();
