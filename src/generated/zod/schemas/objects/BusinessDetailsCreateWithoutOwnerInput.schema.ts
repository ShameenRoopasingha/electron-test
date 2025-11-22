import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  name: z.string(),
  registrationNumber: z.string().optional().nullable(),
  address: z.string(),
  email: z.string().optional().nullable(),
  phone: z.string().optional().nullable(),
  logoUrl: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const BusinessDetailsCreateWithoutOwnerInputObjectSchema: z.ZodType<Prisma.BusinessDetailsCreateWithoutOwnerInput> = makeSchema() as unknown as z.ZodType<Prisma.BusinessDetailsCreateWithoutOwnerInput>;
export const BusinessDetailsCreateWithoutOwnerInputObjectZodSchema = makeSchema();
