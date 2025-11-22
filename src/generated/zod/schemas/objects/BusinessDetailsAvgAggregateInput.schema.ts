import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  ownerId: z.literal(true).optional()
}).strict();
export const BusinessDetailsAvgAggregateInputObjectSchema: z.ZodType<Prisma.BusinessDetailsAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.BusinessDetailsAvgAggregateInputType>;
export const BusinessDetailsAvgAggregateInputObjectZodSchema = makeSchema();
