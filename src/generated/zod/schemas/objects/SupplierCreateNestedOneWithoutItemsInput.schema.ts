import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SupplierCreateWithoutItemsInputObjectSchema as SupplierCreateWithoutItemsInputObjectSchema } from './SupplierCreateWithoutItemsInput.schema';
import { SupplierUncheckedCreateWithoutItemsInputObjectSchema as SupplierUncheckedCreateWithoutItemsInputObjectSchema } from './SupplierUncheckedCreateWithoutItemsInput.schema';
import { SupplierCreateOrConnectWithoutItemsInputObjectSchema as SupplierCreateOrConnectWithoutItemsInputObjectSchema } from './SupplierCreateOrConnectWithoutItemsInput.schema';
import { SupplierWhereUniqueInputObjectSchema as SupplierWhereUniqueInputObjectSchema } from './SupplierWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SupplierCreateWithoutItemsInputObjectSchema), z.lazy(() => SupplierUncheckedCreateWithoutItemsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => SupplierCreateOrConnectWithoutItemsInputObjectSchema).optional(),
  connect: z.lazy(() => SupplierWhereUniqueInputObjectSchema).optional()
}).strict();
export const SupplierCreateNestedOneWithoutItemsInputObjectSchema: z.ZodType<Prisma.SupplierCreateNestedOneWithoutItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.SupplierCreateNestedOneWithoutItemsInput>;
export const SupplierCreateNestedOneWithoutItemsInputObjectZodSchema = makeSchema();
