import * as z from 'zod';
export const CategoryCreateResultSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  description: z.string().optional(),
  items: z.array(z.unknown())
});