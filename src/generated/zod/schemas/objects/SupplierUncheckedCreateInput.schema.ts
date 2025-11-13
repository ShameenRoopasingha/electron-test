import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ItemUncheckedCreateNestedManyWithoutSupplierInputObjectSchema as ItemUncheckedCreateNestedManyWithoutSupplierInputObjectSchema } from './ItemUncheckedCreateNestedManyWithoutSupplierInput.schema';
import { RestockUncheckedCreateNestedManyWithoutSupplierInputObjectSchema as RestockUncheckedCreateNestedManyWithoutSupplierInputObjectSchema } from './RestockUncheckedCreateNestedManyWithoutSupplierInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  name: z.string(),
  email: z.string(),
  phone: z.string(),
  company: z.string(),
  address: z.string(),
  createdAt: z.coerce.date().optional(),
  items: z.lazy(() => ItemUncheckedCreateNestedManyWithoutSupplierInputObjectSchema),
  restocks: z.lazy(() => RestockUncheckedCreateNestedManyWithoutSupplierInputObjectSchema)
}).strict();
export const SupplierUncheckedCreateInputObjectSchema: z.ZodType<Prisma.SupplierUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.SupplierUncheckedCreateInput>;
export const SupplierUncheckedCreateInputObjectZodSchema = makeSchema();
