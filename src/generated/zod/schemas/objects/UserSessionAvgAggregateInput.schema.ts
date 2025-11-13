import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  userId: z.literal(true).optional()
}).strict();
export const UserSessionAvgAggregateInputObjectSchema: z.ZodType<Prisma.UserSessionAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.UserSessionAvgAggregateInputType>;
export const UserSessionAvgAggregateInputObjectZodSchema = makeSchema();
