import * as z from 'zod';
export const UserSessionGroupByResultSchema = z.array(z.object({
  id: z.number().int(),
  userId: z.number().int(),
  token: z.string(),
  ipAddress: z.string(),
  deviceInfo: z.string(),
  loginTime: z.date(),
  logoutTime: z.date(),
  isActive: z.boolean(),
  _count: z.object({
    id: z.number(),
    userId: z.number(),
    token: z.number(),
    ipAddress: z.number(),
    deviceInfo: z.number(),
    loginTime: z.number(),
    logoutTime: z.number(),
    isActive: z.number(),
    user: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable(),
    userId: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    userId: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    userId: z.number().int().nullable(),
    token: z.string().nullable(),
    ipAddress: z.string().nullable(),
    deviceInfo: z.string().nullable(),
    loginTime: z.date().nullable(),
    logoutTime: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    userId: z.number().int().nullable(),
    token: z.string().nullable(),
    ipAddress: z.string().nullable(),
    deviceInfo: z.string().nullable(),
    loginTime: z.date().nullable(),
    logoutTime: z.date().nullable()
  }).nullable().optional()
}));