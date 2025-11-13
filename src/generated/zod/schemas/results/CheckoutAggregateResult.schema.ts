import * as z from 'zod';
export const CheckoutAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    billId: z.number(),
    itemId: z.number(),
    quantity: z.number(),
    price: z.number(),
    payedAmount: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    bill: z.number(),
    item: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable(),
    billId: z.number().nullable(),
    itemId: z.number().nullable(),
    quantity: z.number().nullable(),
    price: z.number().nullable(),
    payedAmount: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    billId: z.number().nullable(),
    itemId: z.number().nullable(),
    quantity: z.number().nullable(),
    price: z.number().nullable(),
    payedAmount: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    billId: z.number().int().nullable(),
    itemId: z.number().int().nullable(),
    quantity: z.number().int().nullable(),
    price: z.number().nullable(),
    payedAmount: z.number().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    billId: z.number().int().nullable(),
    itemId: z.number().int().nullable(),
    quantity: z.number().int().nullable(),
    price: z.number().nullable(),
    payedAmount: z.number().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()});