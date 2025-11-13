import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional()
}).strict();
export const SupplierSumAggregateInputObjectSchema: z.ZodType<Prisma.SupplierSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.SupplierSumAggregateInputType>;
export const SupplierSumAggregateInputObjectZodSchema = makeSchema();
