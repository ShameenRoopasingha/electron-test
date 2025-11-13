import * as z from 'zod';
export const ReturnedOrderGroupByResultSchema = z.array(z.object({
  id: z.number().int(),
  billId: z.number().int(),
  itemId: z.number().int(),
  quantity: z.number().int(),
  reason: z.string(),
  createdAt: z.date(),
  _count: z.object({
    id: z.number(),
    billId: z.number(),
    itemId: z.number(),
    quantity: z.number(),
    reason: z.number(),
    createdAt: z.number(),
    bill: z.number(),
    item: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable(),
    billId: z.number().nullable(),
    itemId: z.number().nullable(),
    quantity: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    billId: z.number().nullable(),
    itemId: z.number().nullable(),
    quantity: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    billId: z.number().int().nullable(),
    itemId: z.number().int().nullable(),
    quantity: z.number().int().nullable(),
    reason: z.string().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    billId: z.number().int().nullable(),
    itemId: z.number().int().nullable(),
    quantity: z.number().int().nullable(),
    reason: z.string().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional()
}));