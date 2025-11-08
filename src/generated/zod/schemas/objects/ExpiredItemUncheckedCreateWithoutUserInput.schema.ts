import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  itemId: z.number().int().optional().nullable(),
  quantity: z.number().int(),
  expirationDate: z.coerce.date(),
  reason: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional()
}).strict();
export const ExpiredItemUncheckedCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.ExpiredItemUncheckedCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ExpiredItemUncheckedCreateWithoutUserInput>;
export const ExpiredItemUncheckedCreateWithoutUserInputObjectZodSchema = makeSchema();
