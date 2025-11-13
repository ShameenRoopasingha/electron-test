import * as z from 'zod';
export const DefectAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    itemId: z.number(),
    quantity: z.number(),
    reason: z.number(),
    reportedBy: z.number(),
    createdAt: z.number(),
    item: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable(),
    itemId: z.number().nullable(),
    quantity: z.number().nullable(),
    reportedBy: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    itemId: z.number().nullable(),
    quantity: z.number().nullable(),
    reportedBy: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    itemId: z.number().int().nullable(),
    quantity: z.number().int().nullable(),
    reason: z.string().nullable(),
    reportedBy: z.number().int().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    itemId: z.number().int().nullable(),
    quantity: z.number().int().nullable(),
    reason: z.string().nullable(),
    reportedBy: z.number().int().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional()});