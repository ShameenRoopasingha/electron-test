import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CheckoutCreateWithoutBillInputObjectSchema as CheckoutCreateWithoutBillInputObjectSchema } from './CheckoutCreateWithoutBillInput.schema';
import { CheckoutUncheckedCreateWithoutBillInputObjectSchema as CheckoutUncheckedCreateWithoutBillInputObjectSchema } from './CheckoutUncheckedCreateWithoutBillInput.schema';
import { CheckoutCreateOrConnectWithoutBillInputObjectSchema as CheckoutCreateOrConnectWithoutBillInputObjectSchema } from './CheckoutCreateOrConnectWithoutBillInput.schema';
import { CheckoutUpsertWithWhereUniqueWithoutBillInputObjectSchema as CheckoutUpsertWithWhereUniqueWithoutBillInputObjectSchema } from './CheckoutUpsertWithWhereUniqueWithoutBillInput.schema';
import { CheckoutCreateManyBillInputEnvelopeObjectSchema as CheckoutCreateManyBillInputEnvelopeObjectSchema } from './CheckoutCreateManyBillInputEnvelope.schema';
import { CheckoutWhereUniqueInputObjectSchema as CheckoutWhereUniqueInputObjectSchema } from './CheckoutWhereUniqueInput.schema';
import { CheckoutUpdateWithWhereUniqueWithoutBillInputObjectSchema as CheckoutUpdateWithWhereUniqueWithoutBillInputObjectSchema } from './CheckoutUpdateWithWhereUniqueWithoutBillInput.schema';
import { CheckoutUpdateManyWithWhereWithoutBillInputObjectSchema as CheckoutUpdateManyWithWhereWithoutBillInputObjectSchema } from './CheckoutUpdateManyWithWhereWithoutBillInput.schema';
import { CheckoutScalarWhereInputObjectSchema as CheckoutScalarWhereInputObjectSchema } from './CheckoutScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CheckoutCreateWithoutBillInputObjectSchema), z.lazy(() => CheckoutCreateWithoutBillInputObjectSchema).array(), z.lazy(() => CheckoutUncheckedCreateWithoutBillInputObjectSchema), z.lazy(() => CheckoutUncheckedCreateWithoutBillInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CheckoutCreateOrConnectWithoutBillInputObjectSchema), z.lazy(() => CheckoutCreateOrConnectWithoutBillInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => CheckoutUpsertWithWhereUniqueWithoutBillInputObjectSchema), z.lazy(() => CheckoutUpsertWithWhereUniqueWithoutBillInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CheckoutCreateManyBillInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => CheckoutWhereUniqueInputObjectSchema), z.lazy(() => CheckoutWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => CheckoutWhereUniqueInputObjectSchema), z.lazy(() => CheckoutWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => CheckoutWhereUniqueInputObjectSchema), z.lazy(() => CheckoutWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => CheckoutWhereUniqueInputObjectSchema), z.lazy(() => CheckoutWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => CheckoutUpdateWithWhereUniqueWithoutBillInputObjectSchema), z.lazy(() => CheckoutUpdateWithWhereUniqueWithoutBillInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => CheckoutUpdateManyWithWhereWithoutBillInputObjectSchema), z.lazy(() => CheckoutUpdateManyWithWhereWithoutBillInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => CheckoutScalarWhereInputObjectSchema), z.lazy(() => CheckoutScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const CheckoutUncheckedUpdateManyWithoutBillNestedInputObjectSchema: z.ZodType<Prisma.CheckoutUncheckedUpdateManyWithoutBillNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CheckoutUncheckedUpdateManyWithoutBillNestedInput>;
export const CheckoutUncheckedUpdateManyWithoutBillNestedInputObjectZodSchema = makeSchema();
