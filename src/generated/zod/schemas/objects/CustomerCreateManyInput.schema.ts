import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  name: z.string(),
  email: z.string(),
  phone: z.string(),
  address: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const CustomerCreateManyInputObjectSchema: z.ZodType<Prisma.CustomerCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerCreateManyInput>;
export const CustomerCreateManyInputObjectZodSchema = makeSchema();
