import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  quantity: z.number().int(),
  reason: z.string(),
  reportedBy: z.number().int(),
  createdAt: z.coerce.date().optional()
}).strict();
export const DefectCreateManyItemInputObjectSchema: z.ZodType<Prisma.DefectCreateManyItemInput> = makeSchema() as unknown as z.ZodType<Prisma.DefectCreateManyItemInput>;
export const DefectCreateManyItemInputObjectZodSchema = makeSchema();
