import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ItemCreateNestedManyWithoutSupplierInputObjectSchema as ItemCreateNestedManyWithoutSupplierInputObjectSchema } from './ItemCreateNestedManyWithoutSupplierInput.schema'

const makeSchema = () => z.object({
  name: z.string(),
  email: z.string(),
  phone: z.string(),
  company: z.string(),
  address: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  items: z.lazy(() => ItemCreateNestedManyWithoutSupplierInputObjectSchema).optional()
}).strict();
export const SupplierCreateWithoutRestocksInputObjectSchema: z.ZodType<Prisma.SupplierCreateWithoutRestocksInput> = makeSchema() as unknown as z.ZodType<Prisma.SupplierCreateWithoutRestocksInput>;
export const SupplierCreateWithoutRestocksInputObjectZodSchema = makeSchema();
