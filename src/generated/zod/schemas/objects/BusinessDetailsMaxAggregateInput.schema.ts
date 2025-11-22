import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  registrationNumber: z.literal(true).optional(),
  address: z.literal(true).optional(),
  email: z.literal(true).optional(),
  phone: z.literal(true).optional(),
  logoUrl: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  ownerId: z.literal(true).optional()
}).strict();
export const BusinessDetailsMaxAggregateInputObjectSchema: z.ZodType<Prisma.BusinessDetailsMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.BusinessDetailsMaxAggregateInputType>;
export const BusinessDetailsMaxAggregateInputObjectZodSchema = makeSchema();
