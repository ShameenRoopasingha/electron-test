import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  itemId: z.number().int().optional().nullable(),
  quantity: z.number().int(),
  reason: z.string(),
  reportedBy: z.number().int(),
  createdAt: z.coerce.date().optional()
}).strict();
export const DefectCreateManyInputObjectSchema: z.ZodType<Prisma.DefectCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.DefectCreateManyInput>;
export const DefectCreateManyInputObjectZodSchema = makeSchema();
