import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  name: z.string(),
  email: z.string(),
  phone: z.string(),
  address: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const CustomerCreateWithoutBillsInputObjectSchema: z.ZodType<Prisma.CustomerCreateWithoutBillsInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerCreateWithoutBillsInput>;
export const CustomerCreateWithoutBillsInputObjectZodSchema = makeSchema();
