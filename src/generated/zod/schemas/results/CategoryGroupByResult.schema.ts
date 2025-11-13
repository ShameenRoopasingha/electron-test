import * as z from 'zod';
export const CategoryGroupByResultSchema = z.array(z.object({
  id: z.number().int(),
  name: z.string(),
  description: z.string(),
  _count: z.object({
    id: z.number(),
    name: z.number(),
    description: z.number(),
    items: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    name: z.string().nullable(),
    description: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    name: z.string().nullable(),
    description: z.string().nullable()
  }).nullable().optional()
}));