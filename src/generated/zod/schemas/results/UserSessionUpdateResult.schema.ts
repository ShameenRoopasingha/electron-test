import * as z from 'zod';
export const UserSessionUpdateResultSchema = z.nullable(z.object({
  id: z.number().int(),
  userId: z.number().int(),
  token: z.string(),
  ipAddress: z.string().optional(),
  deviceInfo: z.string().optional(),
  loginTime: z.date(),
  logoutTime: z.date().optional(),
  isActive: z.boolean(),
  user: z.unknown()
}));