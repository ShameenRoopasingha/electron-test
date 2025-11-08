import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SupplierWhereInputObjectSchema as SupplierWhereInputObjectSchema } from './SupplierWhereInput.schema';
import { SupplierUpdateWithoutItemsInputObjectSchema as SupplierUpdateWithoutItemsInputObjectSchema } from './SupplierUpdateWithoutItemsInput.schema';
import { SupplierUncheckedUpdateWithoutItemsInputObjectSchema as SupplierUncheckedUpdateWithoutItemsInputObjectSchema } from './SupplierUncheckedUpdateWithoutItemsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SupplierWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => SupplierUpdateWithoutItemsInputObjectSchema), z.lazy(() => SupplierUncheckedUpdateWithoutItemsInputObjectSchema)])
}).strict();
export const SupplierUpdateToOneWithWhereWithoutItemsInputObjectSchema: z.ZodType<Prisma.SupplierUpdateToOneWithWhereWithoutItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.SupplierUpdateToOneWithWhereWithoutItemsInput>;
export const SupplierUpdateToOneWithWhereWithoutItemsInputObjectZodSchema = makeSchema();
