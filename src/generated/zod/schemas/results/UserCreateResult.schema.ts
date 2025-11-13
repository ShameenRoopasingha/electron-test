import * as z from 'zod';
export const UserCreateResultSchema = z.object({
  id: z.number().int(),
  username: z.string(),
  email: z.string(),
  password: z.string(),
  role: z.string(),
  fname: z.string(),
  lname: z.string(),
  phone: z.string(),
  address: z.string(),
  bank_account: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  bills: z.array(z.unknown()),
  sessions: z.array(z.unknown()),
  expiredItems: z.array(z.unknown())
});