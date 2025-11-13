import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ItemWhereUniqueInputObjectSchema as ItemWhereUniqueInputObjectSchema } from './ItemWhereUniqueInput.schema';
import { ItemUpdateWithoutSupplierInputObjectSchema as ItemUpdateWithoutSupplierInputObjectSchema } from './ItemUpdateWithoutSupplierInput.schema';
import { ItemUncheckedUpdateWithoutSupplierInputObjectSchema as ItemUncheckedUpdateWithoutSupplierInputObjectSchema } from './ItemUncheckedUpdateWithoutSupplierInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ItemWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ItemUpdateWithoutSupplierInputObjectSchema), z.lazy(() => ItemUncheckedUpdateWithoutSupplierInputObjectSchema)])
}).strict();
export const ItemUpdateWithWhereUniqueWithoutSupplierInputObjectSchema: z.ZodType<Prisma.ItemUpdateWithWhereUniqueWithoutSupplierInput> = makeSchema() as unknown as z.ZodType<Prisma.ItemUpdateWithWhereUniqueWithoutSupplierInput>;
export const ItemUpdateWithWhereUniqueWithoutSupplierInputObjectZodSchema = makeSchema();
