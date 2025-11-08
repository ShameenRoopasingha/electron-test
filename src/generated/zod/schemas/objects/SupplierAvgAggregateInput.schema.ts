import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional()
}).strict();
export const SupplierAvgAggregateInputObjectSchema: z.ZodType<Prisma.SupplierAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.SupplierAvgAggregateInputType>;
export const SupplierAvgAggregateInputObjectZodSchema = makeSchema();
