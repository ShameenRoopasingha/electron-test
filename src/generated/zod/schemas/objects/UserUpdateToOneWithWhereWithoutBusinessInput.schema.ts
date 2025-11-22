import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutBusinessInputObjectSchema as UserUpdateWithoutBusinessInputObjectSchema } from './UserUpdateWithoutBusinessInput.schema';
import { UserUncheckedUpdateWithoutBusinessInputObjectSchema as UserUncheckedUpdateWithoutBusinessInputObjectSchema } from './UserUncheckedUpdateWithoutBusinessInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutBusinessInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutBusinessInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutBusinessInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutBusinessInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutBusinessInput>;
export const UserUpdateToOneWithWhereWithoutBusinessInputObjectZodSchema = makeSchema();
