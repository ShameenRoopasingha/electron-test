import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserCreateNestedOneWithoutExpiredItemsInputObjectSchema as UserCreateNestedOneWithoutExpiredItemsInputObjectSchema } from './UserCreateNestedOneWithoutExpiredItemsInput.schema'

const makeSchema = () => z.object({
  quantity: z.number().int(),
  expirationDate: z.coerce.date(),
  reason: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutExpiredItemsInputObjectSchema)
}).strict();
export const ExpiredItemCreateWithoutItemInputObjectSchema: z.ZodType<Prisma.ExpiredItemCreateWithoutItemInput> = makeSchema() as unknown as z.ZodType<Prisma.ExpiredItemCreateWithoutItemInput>;
export const ExpiredItemCreateWithoutItemInputObjectZodSchema = makeSchema();
