import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SupplierWhereUniqueInputObjectSchema as SupplierWhereUniqueInputObjectSchema } from './SupplierWhereUniqueInput.schema';
import { SupplierCreateWithoutItemsInputObjectSchema as SupplierCreateWithoutItemsInputObjectSchema } from './SupplierCreateWithoutItemsInput.schema';
import { SupplierUncheckedCreateWithoutItemsInputObjectSchema as SupplierUncheckedCreateWithoutItemsInputObjectSchema } from './SupplierUncheckedCreateWithoutItemsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SupplierWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => SupplierCreateWithoutItemsInputObjectSchema), z.lazy(() => SupplierUncheckedCreateWithoutItemsInputObjectSchema)])
}).strict();
export const SupplierCreateOrConnectWithoutItemsInputObjectSchema: z.ZodType<Prisma.SupplierCreateOrConnectWithoutItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.SupplierCreateOrConnectWithoutItemsInput>;
export const SupplierCreateOrConnectWithoutItemsInputObjectZodSchema = makeSchema();
