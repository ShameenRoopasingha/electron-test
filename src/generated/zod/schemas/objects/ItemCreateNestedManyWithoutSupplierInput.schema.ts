import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ItemCreateWithoutSupplierInputObjectSchema as ItemCreateWithoutSupplierInputObjectSchema } from './ItemCreateWithoutSupplierInput.schema';
import { ItemUncheckedCreateWithoutSupplierInputObjectSchema as ItemUncheckedCreateWithoutSupplierInputObjectSchema } from './ItemUncheckedCreateWithoutSupplierInput.schema';
import { ItemCreateOrConnectWithoutSupplierInputObjectSchema as ItemCreateOrConnectWithoutSupplierInputObjectSchema } from './ItemCreateOrConnectWithoutSupplierInput.schema';
import { ItemCreateManySupplierInputEnvelopeObjectSchema as ItemCreateManySupplierInputEnvelopeObjectSchema } from './ItemCreateManySupplierInputEnvelope.schema';
import { ItemWhereUniqueInputObjectSchema as ItemWhereUniqueInputObjectSchema } from './ItemWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ItemCreateWithoutSupplierInputObjectSchema), z.lazy(() => ItemCreateWithoutSupplierInputObjectSchema).array(), z.lazy(() => ItemUncheckedCreateWithoutSupplierInputObjectSchema), z.lazy(() => ItemUncheckedCreateWithoutSupplierInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ItemCreateOrConnectWithoutSupplierInputObjectSchema), z.lazy(() => ItemCreateOrConnectWithoutSupplierInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ItemCreateManySupplierInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ItemWhereUniqueInputObjectSchema), z.lazy(() => ItemWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ItemCreateNestedManyWithoutSupplierInputObjectSchema: z.ZodType<Prisma.ItemCreateNestedManyWithoutSupplierInput> = makeSchema() as unknown as z.ZodType<Prisma.ItemCreateNestedManyWithoutSupplierInput>;
export const ItemCreateNestedManyWithoutSupplierInputObjectZodSchema = makeSchema();
