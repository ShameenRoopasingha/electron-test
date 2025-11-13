import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ReturnedOrderCreateWithoutBillInputObjectSchema as ReturnedOrderCreateWithoutBillInputObjectSchema } from './ReturnedOrderCreateWithoutBillInput.schema';
import { ReturnedOrderUncheckedCreateWithoutBillInputObjectSchema as ReturnedOrderUncheckedCreateWithoutBillInputObjectSchema } from './ReturnedOrderUncheckedCreateWithoutBillInput.schema';
import { ReturnedOrderCreateOrConnectWithoutBillInputObjectSchema as ReturnedOrderCreateOrConnectWithoutBillInputObjectSchema } from './ReturnedOrderCreateOrConnectWithoutBillInput.schema';
import { ReturnedOrderUpsertWithWhereUniqueWithoutBillInputObjectSchema as ReturnedOrderUpsertWithWhereUniqueWithoutBillInputObjectSchema } from './ReturnedOrderUpsertWithWhereUniqueWithoutBillInput.schema';
import { ReturnedOrderCreateManyBillInputEnvelopeObjectSchema as ReturnedOrderCreateManyBillInputEnvelopeObjectSchema } from './ReturnedOrderCreateManyBillInputEnvelope.schema';
import { ReturnedOrderWhereUniqueInputObjectSchema as ReturnedOrderWhereUniqueInputObjectSchema } from './ReturnedOrderWhereUniqueInput.schema';
import { ReturnedOrderUpdateWithWhereUniqueWithoutBillInputObjectSchema as ReturnedOrderUpdateWithWhereUniqueWithoutBillInputObjectSchema } from './ReturnedOrderUpdateWithWhereUniqueWithoutBillInput.schema';
import { ReturnedOrderUpdateManyWithWhereWithoutBillInputObjectSchema as ReturnedOrderUpdateManyWithWhereWithoutBillInputObjectSchema } from './ReturnedOrderUpdateManyWithWhereWithoutBillInput.schema';
import { ReturnedOrderScalarWhereInputObjectSchema as ReturnedOrderScalarWhereInputObjectSchema } from './ReturnedOrderScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReturnedOrderCreateWithoutBillInputObjectSchema), z.lazy(() => ReturnedOrderCreateWithoutBillInputObjectSchema).array(), z.lazy(() => ReturnedOrderUncheckedCreateWithoutBillInputObjectSchema), z.lazy(() => ReturnedOrderUncheckedCreateWithoutBillInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReturnedOrderCreateOrConnectWithoutBillInputObjectSchema), z.lazy(() => ReturnedOrderCreateOrConnectWithoutBillInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ReturnedOrderUpsertWithWhereUniqueWithoutBillInputObjectSchema), z.lazy(() => ReturnedOrderUpsertWithWhereUniqueWithoutBillInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReturnedOrderCreateManyBillInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ReturnedOrderWhereUniqueInputObjectSchema), z.lazy(() => ReturnedOrderWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ReturnedOrderWhereUniqueInputObjectSchema), z.lazy(() => ReturnedOrderWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ReturnedOrderWhereUniqueInputObjectSchema), z.lazy(() => ReturnedOrderWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ReturnedOrderWhereUniqueInputObjectSchema), z.lazy(() => ReturnedOrderWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ReturnedOrderUpdateWithWhereUniqueWithoutBillInputObjectSchema), z.lazy(() => ReturnedOrderUpdateWithWhereUniqueWithoutBillInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ReturnedOrderUpdateManyWithWhereWithoutBillInputObjectSchema), z.lazy(() => ReturnedOrderUpdateManyWithWhereWithoutBillInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ReturnedOrderScalarWhereInputObjectSchema), z.lazy(() => ReturnedOrderScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ReturnedOrderUncheckedUpdateManyWithoutBillNestedInputObjectSchema: z.ZodType<Prisma.ReturnedOrderUncheckedUpdateManyWithoutBillNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ReturnedOrderUncheckedUpdateManyWithoutBillNestedInput>;
export const ReturnedOrderUncheckedUpdateManyWithoutBillNestedInputObjectZodSchema = makeSchema();
