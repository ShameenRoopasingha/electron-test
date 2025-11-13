import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ItemWhereUniqueInputObjectSchema as ItemWhereUniqueInputObjectSchema } from './ItemWhereUniqueInput.schema';
import { ItemCreateWithoutSupplierInputObjectSchema as ItemCreateWithoutSupplierInputObjectSchema } from './ItemCreateWithoutSupplierInput.schema';
import { ItemUncheckedCreateWithoutSupplierInputObjectSchema as ItemUncheckedCreateWithoutSupplierInputObjectSchema } from './ItemUncheckedCreateWithoutSupplierInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ItemWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ItemCreateWithoutSupplierInputObjectSchema), z.lazy(() => ItemUncheckedCreateWithoutSupplierInputObjectSchema)])
}).strict();
export const ItemCreateOrConnectWithoutSupplierInputObjectSchema: z.ZodType<Prisma.ItemCreateOrConnectWithoutSupplierInput> = makeSchema() as unknown as z.ZodType<Prisma.ItemCreateOrConnectWithoutSupplierInput>;
export const ItemCreateOrConnectWithoutSupplierInputObjectZodSchema = makeSchema();
