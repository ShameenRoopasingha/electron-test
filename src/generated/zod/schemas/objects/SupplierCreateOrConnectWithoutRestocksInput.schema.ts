import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SupplierWhereUniqueInputObjectSchema as SupplierWhereUniqueInputObjectSchema } from './SupplierWhereUniqueInput.schema';
import { SupplierCreateWithoutRestocksInputObjectSchema as SupplierCreateWithoutRestocksInputObjectSchema } from './SupplierCreateWithoutRestocksInput.schema';
import { SupplierUncheckedCreateWithoutRestocksInputObjectSchema as SupplierUncheckedCreateWithoutRestocksInputObjectSchema } from './SupplierUncheckedCreateWithoutRestocksInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SupplierWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => SupplierCreateWithoutRestocksInputObjectSchema), z.lazy(() => SupplierUncheckedCreateWithoutRestocksInputObjectSchema)])
}).strict();
export const SupplierCreateOrConnectWithoutRestocksInputObjectSchema: z.ZodType<Prisma.SupplierCreateOrConnectWithoutRestocksInput> = makeSchema() as unknown as z.ZodType<Prisma.SupplierCreateOrConnectWithoutRestocksInput>;
export const SupplierCreateOrConnectWithoutRestocksInputObjectZodSchema = makeSchema();
