import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  quantity: z.number().int(),
  reason: z.string(),
  reportedBy: z.number().int(),
  createdAt: z.coerce.date().optional()
}).strict();
export const DefectCreateWithoutItemInputObjectSchema: z.ZodType<Prisma.DefectCreateWithoutItemInput> = makeSchema() as unknown as z.ZodType<Prisma.DefectCreateWithoutItemInput>;
export const DefectCreateWithoutItemInputObjectZodSchema = makeSchema();
