import * as z from 'zod';
export const BusinessDetailsGroupByResultSchema = z.array(z.object({
  id: z.number().int(),
  name: z.string(),
  registrationNumber: z.string(),
  address: z.string(),
  email: z.string(),
  phone: z.string(),
  logoUrl: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  ownerId: z.number().int(),
  _count: z.object({
    id: z.number(),
    name: z.number(),
    registrationNumber: z.number(),
    address: z.number(),
    email: z.number(),
    phone: z.number(),
    logoUrl: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    ownerId: z.number(),
    owner: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable(),
    ownerId: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    ownerId: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    name: z.string().nullable(),
    registrationNumber: z.string().nullable(),
    address: z.string().nullable(),
    email: z.string().nullable(),
    phone: z.string().nullable(),
    logoUrl: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    ownerId: z.number().int().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    name: z.string().nullable(),
    registrationNumber: z.string().nullable(),
    address: z.string().nullable(),
    email: z.string().nullable(),
    phone: z.string().nullable(),
    logoUrl: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    ownerId: z.number().int().nullable()
  }).nullable().optional()
}));