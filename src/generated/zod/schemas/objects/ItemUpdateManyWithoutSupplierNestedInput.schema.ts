import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ItemCreateWithoutSupplierInputObjectSchema as ItemCreateWithoutSupplierInputObjectSchema } from './ItemCreateWithoutSupplierInput.schema';
import { ItemUncheckedCreateWithoutSupplierInputObjectSchema as ItemUncheckedCreateWithoutSupplierInputObjectSchema } from './ItemUncheckedCreateWithoutSupplierInput.schema';
import { ItemCreateOrConnectWithoutSupplierInputObjectSchema as ItemCreateOrConnectWithoutSupplierInputObjectSchema } from './ItemCreateOrConnectWithoutSupplierInput.schema';
import { ItemUpsertWithWhereUniqueWithoutSupplierInputObjectSchema as ItemUpsertWithWhereUniqueWithoutSupplierInputObjectSchema } from './ItemUpsertWithWhereUniqueWithoutSupplierInput.schema';
import { ItemCreateManySupplierInputEnvelopeObjectSchema as ItemCreateManySupplierInputEnvelopeObjectSchema } from './ItemCreateManySupplierInputEnvelope.schema';
import { ItemWhereUniqueInputObjectSchema as ItemWhereUniqueInputObjectSchema } from './ItemWhereUniqueInput.schema';
import { ItemUpdateWithWhereUniqueWithoutSupplierInputObjectSchema as ItemUpdateWithWhereUniqueWithoutSupplierInputObjectSchema } from './ItemUpdateWithWhereUniqueWithoutSupplierInput.schema';
import { ItemUpdateManyWithWhereWithoutSupplierInputObjectSchema as ItemUpdateManyWithWhereWithoutSupplierInputObjectSchema } from './ItemUpdateManyWithWhereWithoutSupplierInput.schema';
import { ItemScalarWhereInputObjectSchema as ItemScalarWhereInputObjectSchema } from './ItemScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ItemCreateWithoutSupplierInputObjectSchema), z.lazy(() => ItemCreateWithoutSupplierInputObjectSchema).array(), z.lazy(() => ItemUncheckedCreateWithoutSupplierInputObjectSchema), z.lazy(() => ItemUncheckedCreateWithoutSupplierInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ItemCreateOrConnectWithoutSupplierInputObjectSchema), z.lazy(() => ItemCreateOrConnectWithoutSupplierInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ItemUpsertWithWhereUniqueWithoutSupplierInputObjectSchema), z.lazy(() => ItemUpsertWithWhereUniqueWithoutSupplierInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ItemCreateManySupplierInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ItemWhereUniqueInputObjectSchema), z.lazy(() => ItemWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ItemWhereUniqueInputObjectSchema), z.lazy(() => ItemWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ItemWhereUniqueInputObjectSchema), z.lazy(() => ItemWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ItemWhereUniqueInputObjectSchema), z.lazy(() => ItemWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ItemUpdateWithWhereUniqueWithoutSupplierInputObjectSchema), z.lazy(() => ItemUpdateWithWhereUniqueWithoutSupplierInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ItemUpdateManyWithWhereWithoutSupplierInputObjectSchema), z.lazy(() => ItemUpdateManyWithWhereWithoutSupplierInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ItemScalarWhereInputObjectSchema), z.lazy(() => ItemScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ItemUpdateManyWithoutSupplierNestedInputObjectSchema: z.ZodType<Prisma.ItemUpdateManyWithoutSupplierNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ItemUpdateManyWithoutSupplierNestedInput>;
export const ItemUpdateManyWithoutSupplierNestedInputObjectZodSchema = makeSchema();
