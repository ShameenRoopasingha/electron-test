import * as z from 'zod';
export const BillDeleteManyResultSchema = z.object({
  count: z.number()
});