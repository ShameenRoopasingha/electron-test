import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutBillsInputObjectSchema as UserUpdateWithoutBillsInputObjectSchema } from './UserUpdateWithoutBillsInput.schema';
import { UserUncheckedUpdateWithoutBillsInputObjectSchema as UserUncheckedUpdateWithoutBillsInputObjectSchema } from './UserUncheckedUpdateWithoutBillsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutBillsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutBillsInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutBillsInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutBillsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutBillsInput>;
export const UserUpdateToOneWithWhereWithoutBillsInputObjectZodSchema = makeSchema();
