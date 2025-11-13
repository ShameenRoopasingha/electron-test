import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  token: z.literal(true).optional(),
  ipAddress: z.literal(true).optional(),
  deviceInfo: z.literal(true).optional(),
  loginTime: z.literal(true).optional(),
  logoutTime: z.literal(true).optional(),
  isActive: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const UserSessionCountAggregateInputObjectSchema: z.ZodType<Prisma.UserSessionCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.UserSessionCountAggregateInputType>;
export const UserSessionCountAggregateInputObjectZodSchema = makeSchema();
