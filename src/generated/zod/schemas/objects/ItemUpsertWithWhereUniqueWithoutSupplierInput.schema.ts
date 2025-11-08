import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ItemWhereUniqueInputObjectSchema as ItemWhereUniqueInputObjectSchema } from './ItemWhereUniqueInput.schema';
import { ItemUpdateWithoutSupplierInputObjectSchema as ItemUpdateWithoutSupplierInputObjectSchema } from './ItemUpdateWithoutSupplierInput.schema';
import { ItemUncheckedUpdateWithoutSupplierInputObjectSchema as ItemUncheckedUpdateWithoutSupplierInputObjectSchema } from './ItemUncheckedUpdateWithoutSupplierInput.schema';
import { ItemCreateWithoutSupplierInputObjectSchema as ItemCreateWithoutSupplierInputObjectSchema } from './ItemCreateWithoutSupplierInput.schema';
import { ItemUncheckedCreateWithoutSupplierInputObjectSchema as ItemUncheckedCreateWithoutSupplierInputObjectSchema } from './ItemUncheckedCreateWithoutSupplierInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ItemWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ItemUpdateWithoutSupplierInputObjectSchema), z.lazy(() => ItemUncheckedUpdateWithoutSupplierInputObjectSchema)]),
  create: z.union([z.lazy(() => ItemCreateWithoutSupplierInputObjectSchema), z.lazy(() => ItemUncheckedCreateWithoutSupplierInputObjectSchema)])
}).strict();
export const ItemUpsertWithWhereUniqueWithoutSupplierInputObjectSchema: z.ZodType<Prisma.ItemUpsertWithWhereUniqueWithoutSupplierInput> = makeSchema() as unknown as z.ZodType<Prisma.ItemUpsertWithWhereUniqueWithoutSupplierInput>;
export const ItemUpsertWithWhereUniqueWithoutSupplierInputObjectZodSchema = makeSchema();
