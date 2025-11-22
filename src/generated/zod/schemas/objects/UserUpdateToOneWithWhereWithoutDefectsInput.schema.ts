import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutDefectsInputObjectSchema as UserUpdateWithoutDefectsInputObjectSchema } from './UserUpdateWithoutDefectsInput.schema';
import { UserUncheckedUpdateWithoutDefectsInputObjectSchema as UserUncheckedUpdateWithoutDefectsInputObjectSchema } from './UserUncheckedUpdateWithoutDefectsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutDefectsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutDefectsInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutDefectsInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutDefectsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutDefectsInput>;
export const UserUpdateToOneWithWhereWithoutDefectsInputObjectZodSchema = makeSchema();
