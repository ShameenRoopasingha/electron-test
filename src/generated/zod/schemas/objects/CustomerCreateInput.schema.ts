import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { BillCreateNestedManyWithoutCustomerInputObjectSchema as BillCreateNestedManyWithoutCustomerInputObjectSchema } from './BillCreateNestedManyWithoutCustomerInput.schema'

const makeSchema = () => z.object({
  name: z.string(),
  email: z.string(),
  phone: z.string(),
  address: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  bills: z.lazy(() => BillCreateNestedManyWithoutCustomerInputObjectSchema).optional()
}).strict();
export const CustomerCreateInputObjectSchema: z.ZodType<Prisma.CustomerCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerCreateInput>;
export const CustomerCreateInputObjectZodSchema = makeSchema();
