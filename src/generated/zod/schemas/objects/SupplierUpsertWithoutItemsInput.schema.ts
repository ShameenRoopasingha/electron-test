import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SupplierUpdateWithoutItemsInputObjectSchema as SupplierUpdateWithoutItemsInputObjectSchema } from './SupplierUpdateWithoutItemsInput.schema';
import { SupplierUncheckedUpdateWithoutItemsInputObjectSchema as SupplierUncheckedUpdateWithoutItemsInputObjectSchema } from './SupplierUncheckedUpdateWithoutItemsInput.schema';
import { SupplierCreateWithoutItemsInputObjectSchema as SupplierCreateWithoutItemsInputObjectSchema } from './SupplierCreateWithoutItemsInput.schema';
import { SupplierUncheckedCreateWithoutItemsInputObjectSchema as SupplierUncheckedCreateWithoutItemsInputObjectSchema } from './SupplierUncheckedCreateWithoutItemsInput.schema';
import { SupplierWhereInputObjectSchema as SupplierWhereInputObjectSchema } from './SupplierWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => SupplierUpdateWithoutItemsInputObjectSchema), z.lazy(() => SupplierUncheckedUpdateWithoutItemsInputObjectSchema)]),
  create: z.union([z.lazy(() => SupplierCreateWithoutItemsInputObjectSchema), z.lazy(() => SupplierUncheckedCreateWithoutItemsInputObjectSchema)]),
  where: z.lazy(() => SupplierWhereInputObjectSchema).optional()
}).strict();
export const SupplierUpsertWithoutItemsInputObjectSchema: z.ZodType<Prisma.SupplierUpsertWithoutItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.SupplierUpsertWithoutItemsInput>;
export const SupplierUpsertWithoutItemsInputObjectZodSchema = makeSchema();
