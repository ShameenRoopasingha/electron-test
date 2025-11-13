import * as z from 'zod';
export const SupplierDeleteResultSchema = z.nullable(z.object({
  id: z.number().int(),
  name: z.string(),
  email: z.string(),
  phone: z.string(),
  company: z.string(),
  address: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  items: z.array(z.unknown()),
  restocks: z.array(z.unknown())
}));