import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ItemUncheckedCreateNestedManyWithoutSupplierInputObjectSchema as ItemUncheckedCreateNestedManyWithoutSupplierInputObjectSchema } from './ItemUncheckedCreateNestedManyWithoutSupplierInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  name: z.string(),
  email: z.string(),
  phone: z.string(),
  company: z.string(),
  address: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  items: z.lazy(() => ItemUncheckedCreateNestedManyWithoutSupplierInputObjectSchema).optional()
}).strict();
export const SupplierUncheckedCreateWithoutRestocksInputObjectSchema: z.ZodType<Prisma.SupplierUncheckedCreateWithoutRestocksInput> = makeSchema() as unknown as z.ZodType<Prisma.SupplierUncheckedCreateWithoutRestocksInput>;
export const SupplierUncheckedCreateWithoutRestocksInputObjectZodSchema = makeSchema();
