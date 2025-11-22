import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { BillUncheckedCreateNestedManyWithoutCustomerInputObjectSchema as BillUncheckedCreateNestedManyWithoutCustomerInputObjectSchema } from './BillUncheckedCreateNestedManyWithoutCustomerInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  name: z.string(),
  email: z.string(),
  phone: z.string(),
  address: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  bills: z.lazy(() => BillUncheckedCreateNestedManyWithoutCustomerInputObjectSchema).optional()
}).strict();
export const CustomerUncheckedCreateInputObjectSchema: z.ZodType<Prisma.CustomerUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerUncheckedCreateInput>;
export const CustomerUncheckedCreateInputObjectZodSchema = makeSchema();
