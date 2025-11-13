import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SupplierCreateWithoutItemsInputObjectSchema as SupplierCreateWithoutItemsInputObjectSchema } from './SupplierCreateWithoutItemsInput.schema';
import { SupplierUncheckedCreateWithoutItemsInputObjectSchema as SupplierUncheckedCreateWithoutItemsInputObjectSchema } from './SupplierUncheckedCreateWithoutItemsInput.schema';
import { SupplierCreateOrConnectWithoutItemsInputObjectSchema as SupplierCreateOrConnectWithoutItemsInputObjectSchema } from './SupplierCreateOrConnectWithoutItemsInput.schema';
import { SupplierUpsertWithoutItemsInputObjectSchema as SupplierUpsertWithoutItemsInputObjectSchema } from './SupplierUpsertWithoutItemsInput.schema';
import { SupplierWhereUniqueInputObjectSchema as SupplierWhereUniqueInputObjectSchema } from './SupplierWhereUniqueInput.schema';
import { SupplierUpdateToOneWithWhereWithoutItemsInputObjectSchema as SupplierUpdateToOneWithWhereWithoutItemsInputObjectSchema } from './SupplierUpdateToOneWithWhereWithoutItemsInput.schema';
import { SupplierUpdateWithoutItemsInputObjectSchema as SupplierUpdateWithoutItemsInputObjectSchema } from './SupplierUpdateWithoutItemsInput.schema';
import { SupplierUncheckedUpdateWithoutItemsInputObjectSchema as SupplierUncheckedUpdateWithoutItemsInputObjectSchema } from './SupplierUncheckedUpdateWithoutItemsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SupplierCreateWithoutItemsInputObjectSchema), z.lazy(() => SupplierUncheckedCreateWithoutItemsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => SupplierCreateOrConnectWithoutItemsInputObjectSchema).optional(),
  upsert: z.lazy(() => SupplierUpsertWithoutItemsInputObjectSchema).optional(),
  connect: z.lazy(() => SupplierWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => SupplierUpdateToOneWithWhereWithoutItemsInputObjectSchema), z.lazy(() => SupplierUpdateWithoutItemsInputObjectSchema), z.lazy(() => SupplierUncheckedUpdateWithoutItemsInputObjectSchema)]).optional()
}).strict();
export const SupplierUpdateOneRequiredWithoutItemsNestedInputObjectSchema: z.ZodType<Prisma.SupplierUpdateOneRequiredWithoutItemsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.SupplierUpdateOneRequiredWithoutItemsNestedInput>;
export const SupplierUpdateOneRequiredWithoutItemsNestedInputObjectZodSchema = makeSchema();
