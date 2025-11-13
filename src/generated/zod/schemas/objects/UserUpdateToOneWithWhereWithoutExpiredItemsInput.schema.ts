import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutExpiredItemsInputObjectSchema as UserUpdateWithoutExpiredItemsInputObjectSchema } from './UserUpdateWithoutExpiredItemsInput.schema';
import { UserUncheckedUpdateWithoutExpiredItemsInputObjectSchema as UserUncheckedUpdateWithoutExpiredItemsInputObjectSchema } from './UserUncheckedUpdateWithoutExpiredItemsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutExpiredItemsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutExpiredItemsInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutExpiredItemsInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutExpiredItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutExpiredItemsInput>;
export const UserUpdateToOneWithWhereWithoutExpiredItemsInputObjectZodSchema = makeSchema();
