import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  name: z.string(),
  registrationNumber: z.string().optional().nullable(),
  address: z.string(),
  email: z.string().optional().nullable(),
  phone: z.string().optional().nullable(),
  logoUrl: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  ownerId: z.number().int()
}).strict();
export const BusinessDetailsUncheckedCreateInputObjectSchema: z.ZodType<Prisma.BusinessDetailsUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.BusinessDetailsUncheckedCreateInput>;
export const BusinessDetailsUncheckedCreateInputObjectZodSchema = makeSchema();
