import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  token: z.string(),
  ipAddress: z.string().optional().nullable(),
  deviceInfo: z.string().optional().nullable(),
  loginTime: z.coerce.date().optional(),
  logoutTime: z.coerce.date().optional().nullable(),
  isActive: z.boolean().optional()
}).strict();
export const UserSessionCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.UserSessionCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.UserSessionCreateWithoutUserInput>;
export const UserSessionCreateWithoutUserInputObjectZodSchema = makeSchema();
