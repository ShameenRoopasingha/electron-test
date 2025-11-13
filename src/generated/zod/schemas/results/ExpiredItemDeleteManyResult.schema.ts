import * as z from 'zod';
export const ExpiredItemDeleteManyResultSchema = z.object({
  count: z.number()
});