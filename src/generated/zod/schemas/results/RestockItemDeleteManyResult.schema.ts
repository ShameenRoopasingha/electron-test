import * as z from 'zod';
export const RestockItemDeleteManyResultSchema = z.object({
  count: z.number()
});