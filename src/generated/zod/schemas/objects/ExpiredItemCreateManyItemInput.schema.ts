import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  quantity: z.number().int(),
  expirationDate: z.coerce.date(),
  disposedBy: z.number().int(),
  reason: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional()
}).strict();
export const ExpiredItemCreateManyItemInputObjectSchema: z.ZodType<Prisma.ExpiredItemCreateManyItemInput> = makeSchema() as unknown as z.ZodType<Prisma.ExpiredItemCreateManyItemInput>;
export const ExpiredItemCreateManyItemInputObjectZodSchema = makeSchema();
