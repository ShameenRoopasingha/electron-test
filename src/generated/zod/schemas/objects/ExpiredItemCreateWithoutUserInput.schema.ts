import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ItemCreateNestedOneWithoutExpiredItemsInputObjectSchema as ItemCreateNestedOneWithoutExpiredItemsInputObjectSchema } from './ItemCreateNestedOneWithoutExpiredItemsInput.schema'

const makeSchema = () => z.object({
  quantity: z.number().int(),
  expirationDate: z.coerce.date(),
  reason: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  item: z.lazy(() => ItemCreateNestedOneWithoutExpiredItemsInputObjectSchema).optional()
}).strict();
export const ExpiredItemCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.ExpiredItemCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ExpiredItemCreateWithoutUserInput>;
export const ExpiredItemCreateWithoutUserInputObjectZodSchema = makeSchema();
