import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CheckoutCreateWithoutItemInputObjectSchema as CheckoutCreateWithoutItemInputObjectSchema } from './CheckoutCreateWithoutItemInput.schema';
import { CheckoutUncheckedCreateWithoutItemInputObjectSchema as CheckoutUncheckedCreateWithoutItemInputObjectSchema } from './CheckoutUncheckedCreateWithoutItemInput.schema';
import { CheckoutCreateOrConnectWithoutItemInputObjectSchema as CheckoutCreateOrConnectWithoutItemInputObjectSchema } from './CheckoutCreateOrConnectWithoutItemInput.schema';
import { CheckoutUpsertWithWhereUniqueWithoutItemInputObjectSchema as CheckoutUpsertWithWhereUniqueWithoutItemInputObjectSchema } from './CheckoutUpsertWithWhereUniqueWithoutItemInput.schema';
import { CheckoutCreateManyItemInputEnvelopeObjectSchema as CheckoutCreateManyItemInputEnvelopeObjectSchema } from './CheckoutCreateManyItemInputEnvelope.schema';
import { CheckoutWhereUniqueInputObjectSchema as CheckoutWhereUniqueInputObjectSchema } from './CheckoutWhereUniqueInput.schema';
import { CheckoutUpdateWithWhereUniqueWithoutItemInputObjectSchema as CheckoutUpdateWithWhereUniqueWithoutItemInputObjectSchema } from './CheckoutUpdateWithWhereUniqueWithoutItemInput.schema';
import { CheckoutUpdateManyWithWhereWithoutItemInputObjectSchema as CheckoutUpdateManyWithWhereWithoutItemInputObjectSchema } from './CheckoutUpdateManyWithWhereWithoutItemInput.schema';
import { CheckoutScalarWhereInputObjectSchema as CheckoutScalarWhereInputObjectSchema } from './CheckoutScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CheckoutCreateWithoutItemInputObjectSchema), z.lazy(() => CheckoutCreateWithoutItemInputObjectSchema).array(), z.lazy(() => CheckoutUncheckedCreateWithoutItemInputObjectSchema), z.lazy(() => CheckoutUncheckedCreateWithoutItemInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CheckoutCreateOrConnectWithoutItemInputObjectSchema), z.lazy(() => CheckoutCreateOrConnectWithoutItemInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => CheckoutUpsertWithWhereUniqueWithoutItemInputObjectSchema), z.lazy(() => CheckoutUpsertWithWhereUniqueWithoutItemInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CheckoutCreateManyItemInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => CheckoutWhereUniqueInputObjectSchema), z.lazy(() => CheckoutWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => CheckoutWhereUniqueInputObjectSchema), z.lazy(() => CheckoutWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => CheckoutWhereUniqueInputObjectSchema), z.lazy(() => CheckoutWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => CheckoutWhereUniqueInputObjectSchema), z.lazy(() => CheckoutWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => CheckoutUpdateWithWhereUniqueWithoutItemInputObjectSchema), z.lazy(() => CheckoutUpdateWithWhereUniqueWithoutItemInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => CheckoutUpdateManyWithWhereWithoutItemInputObjectSchema), z.lazy(() => CheckoutUpdateManyWithWhereWithoutItemInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => CheckoutScalarWhereInputObjectSchema), z.lazy(() => CheckoutScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const CheckoutUncheckedUpdateManyWithoutItemNestedInputObjectSchema: z.ZodType<Prisma.CheckoutUncheckedUpdateManyWithoutItemNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CheckoutUncheckedUpdateManyWithoutItemNestedInput>;
export const CheckoutUncheckedUpdateManyWithoutItemNestedInputObjectZodSchema = makeSchema();
