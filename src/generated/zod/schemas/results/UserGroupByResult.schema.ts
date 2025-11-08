import * as z from 'zod';
export const UserGroupByResultSchema = z.array(z.object({
  id: z.number().int(),
  username: z.string(),
  email: z.string(),
  passwordHash: z.string(),
  role: z.string(),
  fname: z.string(),
  lname: z.string(),
  phone: z.string(),
  address: z.string(),
  bank_account: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  _count: z.object({
    id: z.number(),
    username: z.number(),
    email: z.number(),
    passwordHash: z.number(),
    role: z.number(),
    fname: z.number(),
    lname: z.number(),
    phone: z.number(),
    address: z.number(),
    bank_account: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    bills: z.number(),
    sessions: z.number(),
    expiredItems: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    username: z.string().nullable(),
    email: z.string().nullable(),
    passwordHash: z.string().nullable(),
    role: z.string().nullable(),
    fname: z.string().nullable(),
    lname: z.string().nullable(),
    phone: z.string().nullable(),
    address: z.string().nullable(),
    bank_account: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    username: z.string().nullable(),
    email: z.string().nullable(),
    passwordHash: z.string().nullable(),
    role: z.string().nullable(),
    fname: z.string().nullable(),
    lname: z.string().nullable(),
    phone: z.string().nullable(),
    address: z.string().nullable(),
    bank_account: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()
}));