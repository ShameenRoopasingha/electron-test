import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SupplierWhereInputObjectSchema as SupplierWhereInputObjectSchema } from './SupplierWhereInput.schema';
import { SupplierUpdateWithoutRestocksInputObjectSchema as SupplierUpdateWithoutRestocksInputObjectSchema } from './SupplierUpdateWithoutRestocksInput.schema';
import { SupplierUncheckedUpdateWithoutRestocksInputObjectSchema as SupplierUncheckedUpdateWithoutRestocksInputObjectSchema } from './SupplierUncheckedUpdateWithoutRestocksInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SupplierWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => SupplierUpdateWithoutRestocksInputObjectSchema), z.lazy(() => SupplierUncheckedUpdateWithoutRestocksInputObjectSchema)])
}).strict();
export const SupplierUpdateToOneWithWhereWithoutRestocksInputObjectSchema: z.ZodType<Prisma.SupplierUpdateToOneWithWhereWithoutRestocksInput> = makeSchema() as unknown as z.ZodType<Prisma.SupplierUpdateToOneWithWhereWithoutRestocksInput>;
export const SupplierUpdateToOneWithWhereWithoutRestocksInputObjectZodSchema = makeSchema();
