import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  itemId: z.literal(true).optional(),
  quantity: z.literal(true).optional(),
  reportedBy: z.literal(true).optional()
}).strict();
export const DefectSumAggregateInputObjectSchema: z.ZodType<Prisma.DefectSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DefectSumAggregateInputType>;
export const DefectSumAggregateInputObjectZodSchema = makeSchema();
