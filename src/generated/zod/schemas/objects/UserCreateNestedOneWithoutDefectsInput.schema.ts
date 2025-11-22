import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserCreateWithoutDefectsInputObjectSchema as UserCreateWithoutDefectsInputObjectSchema } from './UserCreateWithoutDefectsInput.schema';
import { UserUncheckedCreateWithoutDefectsInputObjectSchema as UserUncheckedCreateWithoutDefectsInputObjectSchema } from './UserUncheckedCreateWithoutDefectsInput.schema';
import { UserCreateOrConnectWithoutDefectsInputObjectSchema as UserCreateOrConnectWithoutDefectsInputObjectSchema } from './UserCreateOrConnectWithoutDefectsInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutDefectsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutDefectsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutDefectsInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutDefectsInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutDefectsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutDefectsInput>;
export const UserCreateNestedOneWithoutDefectsInputObjectZodSchema = makeSchema();
