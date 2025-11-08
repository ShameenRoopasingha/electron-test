import * as z from 'zod';
export const CustomerUpsertResultSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  email: z.string(),
  phone: z.string(),
  address: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  bills: z.array(z.unknown())
});