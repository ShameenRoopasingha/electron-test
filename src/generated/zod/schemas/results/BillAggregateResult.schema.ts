import * as z from 'zod';
export const BillAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    userId: z.number(),
    customerId: z.number(),
    totalAmount: z.number(),
    paymentMethod: z.number(),
    paymentStatus: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    user: z.number(),
    customer: z.number(),
    checkouts: z.number(),
    returnedOrders: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable(),
    userId: z.number().nullable(),
    customerId: z.number().nullable(),
    totalAmount: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    userId: z.number().nullable(),
    customerId: z.number().nullable(),
    totalAmount: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    userId: z.number().int().nullable(),
    customerId: z.number().int().nullable(),
    totalAmount: z.number().nullable(),
    paymentMethod: z.string().nullable(),
    paymentStatus: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    userId: z.number().int().nullable(),
    customerId: z.number().int().nullable(),
    totalAmount: z.number().nullable(),
    paymentMethod: z.string().nullable(),
    paymentStatus: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()});