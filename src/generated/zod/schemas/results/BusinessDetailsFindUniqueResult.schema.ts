import * as z from 'zod';
export const BusinessDetailsFindUniqueResultSchema = z.nullable(z.object({
  id: z.number().int(),
  name: z.string(),
  registrationNumber: z.string().optional(),
  address: z.string(),
  email: z.string().optional(),
  phone: z.string().optional(),
  logoUrl: z.string().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
  ownerId: z.number().int(),
  owner: z.unknown()
}));