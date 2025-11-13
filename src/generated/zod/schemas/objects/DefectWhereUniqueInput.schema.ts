import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional()
}).strict();
export const DefectWhereUniqueInputObjectSchema: z.ZodType<Prisma.DefectWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.DefectWhereUniqueInput>;
export const DefectWhereUniqueInputObjectZodSchema = makeSchema();
