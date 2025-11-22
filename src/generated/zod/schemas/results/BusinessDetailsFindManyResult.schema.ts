import * as z from 'zod';
export const BusinessDetailsFindManyResultSchema = z.object({
  data: z.array(z.object({
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
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});