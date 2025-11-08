import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RestockCreateWithoutSupplierInputObjectSchema as RestockCreateWithoutSupplierInputObjectSchema } from './RestockCreateWithoutSupplierInput.schema';
import { RestockUncheckedCreateWithoutSupplierInputObjectSchema as RestockUncheckedCreateWithoutSupplierInputObjectSchema } from './RestockUncheckedCreateWithoutSupplierInput.schema';
import { RestockCreateOrConnectWithoutSupplierInputObjectSchema as RestockCreateOrConnectWithoutSupplierInputObjectSchema } from './RestockCreateOrConnectWithoutSupplierInput.schema';
import { RestockUpsertWithWhereUniqueWithoutSupplierInputObjectSchema as RestockUpsertWithWhereUniqueWithoutSupplierInputObjectSchema } from './RestockUpsertWithWhereUniqueWithoutSupplierInput.schema';
import { RestockCreateManySupplierInputEnvelopeObjectSchema as RestockCreateManySupplierInputEnvelopeObjectSchema } from './RestockCreateManySupplierInputEnvelope.schema';
import { RestockWhereUniqueInputObjectSchema as RestockWhereUniqueInputObjectSchema } from './RestockWhereUniqueInput.schema';
import { RestockUpdateWithWhereUniqueWithoutSupplierInputObjectSchema as RestockUpdateWithWhereUniqueWithoutSupplierInputObjectSchema } from './RestockUpdateWithWhereUniqueWithoutSupplierInput.schema';
import { RestockUpdateManyWithWhereWithoutSupplierInputObjectSchema as RestockUpdateManyWithWhereWithoutSupplierInputObjectSchema } from './RestockUpdateManyWithWhereWithoutSupplierInput.schema';
import { RestockScalarWhereInputObjectSchema as RestockScalarWhereInputObjectSchema } from './RestockScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => RestockCreateWithoutSupplierInputObjectSchema), z.lazy(() => RestockCreateWithoutSupplierInputObjectSchema).array(), z.lazy(() => RestockUncheckedCreateWithoutSupplierInputObjectSchema), z.lazy(() => RestockUncheckedCreateWithoutSupplierInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => RestockCreateOrConnectWithoutSupplierInputObjectSchema), z.lazy(() => RestockCreateOrConnectWithoutSupplierInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => RestockUpsertWithWhereUniqueWithoutSupplierInputObjectSchema), z.lazy(() => RestockUpsertWithWhereUniqueWithoutSupplierInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => RestockCreateManySupplierInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => RestockWhereUniqueInputObjectSchema), z.lazy(() => RestockWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => RestockWhereUniqueInputObjectSchema), z.lazy(() => RestockWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => RestockWhereUniqueInputObjectSchema), z.lazy(() => RestockWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => RestockWhereUniqueInputObjectSchema), z.lazy(() => RestockWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => RestockUpdateWithWhereUniqueWithoutSupplierInputObjectSchema), z.lazy(() => RestockUpdateWithWhereUniqueWithoutSupplierInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => RestockUpdateManyWithWhereWithoutSupplierInputObjectSchema), z.lazy(() => RestockUpdateManyWithWhereWithoutSupplierInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => RestockScalarWhereInputObjectSchema), z.lazy(() => RestockScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const RestockUncheckedUpdateManyWithoutSupplierNestedInputObjectSchema: z.ZodType<Prisma.RestockUncheckedUpdateManyWithoutSupplierNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.RestockUncheckedUpdateManyWithoutSupplierNestedInput>;
export const RestockUncheckedUpdateManyWithoutSupplierNestedInputObjectZodSchema = makeSchema();
