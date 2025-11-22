import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  ownerId: z.literal(true).optional()
}).strict();
export const BusinessDetailsSumAggregateInputObjectSchema: z.ZodType<Prisma.BusinessDetailsSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.BusinessDetailsSumAggregateInputType>;
export const BusinessDetailsSumAggregateInputObjectZodSchema = makeSchema();
