import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutRestocksInputObjectSchema as UserUpdateWithoutRestocksInputObjectSchema } from './UserUpdateWithoutRestocksInput.schema';
import { UserUncheckedUpdateWithoutRestocksInputObjectSchema as UserUncheckedUpdateWithoutRestocksInputObjectSchema } from './UserUncheckedUpdateWithoutRestocksInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutRestocksInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutRestocksInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutRestocksInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutRestocksInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutRestocksInput>;
export const UserUpdateToOneWithWhereWithoutRestocksInputObjectZodSchema = makeSchema();
