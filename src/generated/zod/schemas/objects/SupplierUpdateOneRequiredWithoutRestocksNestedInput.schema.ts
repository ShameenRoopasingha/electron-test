import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SupplierCreateWithoutRestocksInputObjectSchema as SupplierCreateWithoutRestocksInputObjectSchema } from './SupplierCreateWithoutRestocksInput.schema';
import { SupplierUncheckedCreateWithoutRestocksInputObjectSchema as SupplierUncheckedCreateWithoutRestocksInputObjectSchema } from './SupplierUncheckedCreateWithoutRestocksInput.schema';
import { SupplierCreateOrConnectWithoutRestocksInputObjectSchema as SupplierCreateOrConnectWithoutRestocksInputObjectSchema } from './SupplierCreateOrConnectWithoutRestocksInput.schema';
import { SupplierUpsertWithoutRestocksInputObjectSchema as SupplierUpsertWithoutRestocksInputObjectSchema } from './SupplierUpsertWithoutRestocksInput.schema';
import { SupplierWhereUniqueInputObjectSchema as SupplierWhereUniqueInputObjectSchema } from './SupplierWhereUniqueInput.schema';
import { SupplierUpdateToOneWithWhereWithoutRestocksInputObjectSchema as SupplierUpdateToOneWithWhereWithoutRestocksInputObjectSchema } from './SupplierUpdateToOneWithWhereWithoutRestocksInput.schema';
import { SupplierUpdateWithoutRestocksInputObjectSchema as SupplierUpdateWithoutRestocksInputObjectSchema } from './SupplierUpdateWithoutRestocksInput.schema';
import { SupplierUncheckedUpdateWithoutRestocksInputObjectSchema as SupplierUncheckedUpdateWithoutRestocksInputObjectSchema } from './SupplierUncheckedUpdateWithoutRestocksInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SupplierCreateWithoutRestocksInputObjectSchema), z.lazy(() => SupplierUncheckedCreateWithoutRestocksInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => SupplierCreateOrConnectWithoutRestocksInputObjectSchema).optional(),
  upsert: z.lazy(() => SupplierUpsertWithoutRestocksInputObjectSchema).optional(),
  connect: z.lazy(() => SupplierWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => SupplierUpdateToOneWithWhereWithoutRestocksInputObjectSchema), z.lazy(() => SupplierUpdateWithoutRestocksInputObjectSchema), z.lazy(() => SupplierUncheckedUpdateWithoutRestocksInputObjectSchema)]).optional()
}).strict();
export const SupplierUpdateOneRequiredWithoutRestocksNestedInputObjectSchema: z.ZodType<Prisma.SupplierUpdateOneRequiredWithoutRestocksNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.SupplierUpdateOneRequiredWithoutRestocksNestedInput>;
export const SupplierUpdateOneRequiredWithoutRestocksNestedInputObjectZodSchema = makeSchema();
