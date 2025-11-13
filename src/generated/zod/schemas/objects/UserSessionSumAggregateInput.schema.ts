import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  userId: z.literal(true).optional()
}).strict();
export const UserSessionSumAggregateInputObjectSchema: z.ZodType<Prisma.UserSessionSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.UserSessionSumAggregateInputType>;
export const UserSessionSumAggregateInputObjectZodSchema = makeSchema();
