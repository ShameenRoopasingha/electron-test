import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ItemCreateNestedOneWithoutExpiredItemsInputObjectSchema as ItemCreateNestedOneWithoutExpiredItemsInputObjectSchema } from './ItemCreateNestedOneWithoutExpiredItemsInput.schema';
import { UserCreateNestedOneWithoutExpiredItemsInputObjectSchema as UserCreateNestedOneWithoutExpiredItemsInputObjectSchema } from './UserCreateNestedOneWithoutExpiredItemsInput.schema'

const makeSchema = () => z.object({
  quantity: z.number().int(),
  expirationDate: z.coerce.date(),
  reason: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  item: z.lazy(() => ItemCreateNestedOneWithoutExpiredItemsInputObjectSchema).optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutExpiredItemsInputObjectSchema)
}).strict();
export const ExpiredItemCreateInputObjectSchema: z.ZodType<Prisma.ExpiredItemCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ExpiredItemCreateInput>;
export const ExpiredItemCreateInputObjectZodSchema = makeSchema();
