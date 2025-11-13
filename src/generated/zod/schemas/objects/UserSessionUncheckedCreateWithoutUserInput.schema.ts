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
export const UserSessionUncheckedCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.UserSessionUncheckedCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.UserSessionUncheckedCreateWithoutUserInput>;
export const UserSessionUncheckedCreateWithoutUserInputObjectZodSchema = makeSchema();
