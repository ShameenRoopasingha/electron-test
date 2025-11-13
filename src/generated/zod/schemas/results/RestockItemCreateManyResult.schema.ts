import * as z from 'zod';
export const RestockItemCreateManyResultSchema = z.object({
  count: z.number()
});