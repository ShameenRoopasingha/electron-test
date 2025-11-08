import * as z from 'zod';
export const UserSessionFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.number().int(),
  userId: z.number().int(),
  token: z.string(),
  ipAddress: z.string().optional(),
  deviceInfo: z.string().optional(),
  loginTime: z.date(),
  logoutTime: z.date().optional(),
  isActive: z.boolean(),
  user: z.unknown()
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});