import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutDefectsInputObjectSchema as UserCreateWithoutDefectsInputObjectSchema } from './UserCreateWithoutDefectsInput.schema';
import { UserUncheckedCreateWithoutDefectsInputObjectSchema as UserUncheckedCreateWithoutDefectsInputObjectSchema } from './UserUncheckedCreateWithoutDefectsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutDefectsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutDefectsInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutDefectsInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutDefectsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutDefectsInput>;
export const UserCreateOrConnectWithoutDefectsInputObjectZodSchema = makeSchema();
