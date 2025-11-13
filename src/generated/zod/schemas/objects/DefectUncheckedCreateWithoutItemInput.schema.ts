import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  quantity: z.number().int(),
  reason: z.string(),
  reportedBy: z.number().int(),
  createdAt: z.coerce.date().optional()
}).strict();
export const DefectUncheckedCreateWithoutItemInputObjectSchema: z.ZodType<Prisma.DefectUncheckedCreateWithoutItemInput> = makeSchema() as unknown as z.ZodType<Prisma.DefectUncheckedCreateWithoutItemInput>;
export const DefectUncheckedCreateWithoutItemInputObjectZodSchema = makeSchema();
