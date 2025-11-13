import * as z from 'zod';
export const RestockGroupByResultSchema = z.array(z.object({
  id: z.number().int(),
  supplierId: z.number().int(),
  userId: z.number().int(),
  totalCost: z.number(),
  createdAt: z.date(),
  _count: z.object({
    id: z.number(),
    supplierId: z.number(),
    userId: z.number(),
    totalCost: z.number(),
    createdAt: z.number(),
    supplier: z.number(),
    items: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable(),
    supplierId: z.number().nullable(),
    userId: z.number().nullable(),
    totalCost: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    supplierId: z.number().nullable(),
    userId: z.number().nullable(),
    totalCost: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    supplierId: z.number().int().nullable(),
    userId: z.number().int().nullable(),
    totalCost: z.number().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    supplierId: z.number().int().nullable(),
    userId: z.number().int().nullable(),
    totalCost: z.number().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional()
}));