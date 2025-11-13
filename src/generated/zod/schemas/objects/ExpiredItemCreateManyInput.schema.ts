import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  itemId: z.number().int().optional().nullable(),
  quantity: z.number().int(),
  expirationDate: z.coerce.date(),
  disposedBy: z.number().int(),
  reason: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional()
}).strict();
export const ExpiredItemCreateManyInputObjectSchema: z.ZodType<Prisma.ExpiredItemCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.ExpiredItemCreateManyInput>;
export const ExpiredItemCreateManyInputObjectZodSchema = makeSchema();
