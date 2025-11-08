import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  token: z.string(),
  ipAddress: z.string().optional().nullable(),
  deviceInfo: z.string().optional().nullable(),
  loginTime: z.coerce.date().optional(),
  logoutTime: z.coerce.date().optional().nullable(),
  isActive: z.boolean().optional()
}).strict();
export const UserSessionCreateManyUserInputObjectSchema: z.ZodType<Prisma.UserSessionCreateManyUserInput> = makeSchema() as unknown as z.ZodType<Prisma.UserSessionCreateManyUserInput>;
export const UserSessionCreateManyUserInputObjectZodSchema = makeSchema();
