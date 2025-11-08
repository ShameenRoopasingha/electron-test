import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SupplierUpdateWithoutRestocksInputObjectSchema as SupplierUpdateWithoutRestocksInputObjectSchema } from './SupplierUpdateWithoutRestocksInput.schema';
import { SupplierUncheckedUpdateWithoutRestocksInputObjectSchema as SupplierUncheckedUpdateWithoutRestocksInputObjectSchema } from './SupplierUncheckedUpdateWithoutRestocksInput.schema';
import { SupplierCreateWithoutRestocksInputObjectSchema as SupplierCreateWithoutRestocksInputObjectSchema } from './SupplierCreateWithoutRestocksInput.schema';
import { SupplierUncheckedCreateWithoutRestocksInputObjectSchema as SupplierUncheckedCreateWithoutRestocksInputObjectSchema } from './SupplierUncheckedCreateWithoutRestocksInput.schema';
import { SupplierWhereInputObjectSchema as SupplierWhereInputObjectSchema } from './SupplierWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => SupplierUpdateWithoutRestocksInputObjectSchema), z.lazy(() => SupplierUncheckedUpdateWithoutRestocksInputObjectSchema)]),
  create: z.union([z.lazy(() => SupplierCreateWithoutRestocksInputObjectSchema), z.lazy(() => SupplierUncheckedCreateWithoutRestocksInputObjectSchema)]),
  where: z.lazy(() => SupplierWhereInputObjectSchema).optional()
}).strict();
export const SupplierUpsertWithoutRestocksInputObjectSchema: z.ZodType<Prisma.SupplierUpsertWithoutRestocksInput> = makeSchema() as unknown as z.ZodType<Prisma.SupplierUpsertWithoutRestocksInput>;
export const SupplierUpsertWithoutRestocksInputObjectZodSchema = makeSchema();
