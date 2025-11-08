import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SupplierCreateWithoutRestocksInputObjectSchema as SupplierCreateWithoutRestocksInputObjectSchema } from './SupplierCreateWithoutRestocksInput.schema';
import { SupplierUncheckedCreateWithoutRestocksInputObjectSchema as SupplierUncheckedCreateWithoutRestocksInputObjectSchema } from './SupplierUncheckedCreateWithoutRestocksInput.schema';
import { SupplierCreateOrConnectWithoutRestocksInputObjectSchema as SupplierCreateOrConnectWithoutRestocksInputObjectSchema } from './SupplierCreateOrConnectWithoutRestocksInput.schema';
import { SupplierWhereUniqueInputObjectSchema as SupplierWhereUniqueInputObjectSchema } from './SupplierWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SupplierCreateWithoutRestocksInputObjectSchema), z.lazy(() => SupplierUncheckedCreateWithoutRestocksInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => SupplierCreateOrConnectWithoutRestocksInputObjectSchema).optional(),
  connect: z.lazy(() => SupplierWhereUniqueInputObjectSchema).optional()
}).strict();
export const SupplierCreateNestedOneWithoutRestocksInputObjectSchema: z.ZodType<Prisma.SupplierCreateNestedOneWithoutRestocksInput> = makeSchema() as unknown as z.ZodType<Prisma.SupplierCreateNestedOneWithoutRestocksInput>;
export const SupplierCreateNestedOneWithoutRestocksInputObjectZodSchema = makeSchema();
