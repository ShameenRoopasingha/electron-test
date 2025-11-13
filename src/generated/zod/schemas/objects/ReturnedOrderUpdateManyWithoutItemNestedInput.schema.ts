import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ReturnedOrderCreateWithoutItemInputObjectSchema as ReturnedOrderCreateWithoutItemInputObjectSchema } from './ReturnedOrderCreateWithoutItemInput.schema';
import { ReturnedOrderUncheckedCreateWithoutItemInputObjectSchema as ReturnedOrderUncheckedCreateWithoutItemInputObjectSchema } from './ReturnedOrderUncheckedCreateWithoutItemInput.schema';
import { ReturnedOrderCreateOrConnectWithoutItemInputObjectSchema as ReturnedOrderCreateOrConnectWithoutItemInputObjectSchema } from './ReturnedOrderCreateOrConnectWithoutItemInput.schema';
import { ReturnedOrderUpsertWithWhereUniqueWithoutItemInputObjectSchema as ReturnedOrderUpsertWithWhereUniqueWithoutItemInputObjectSchema } from './ReturnedOrderUpsertWithWhereUniqueWithoutItemInput.schema';
import { ReturnedOrderCreateManyItemInputEnvelopeObjectSchema as ReturnedOrderCreateManyItemInputEnvelopeObjectSchema } from './ReturnedOrderCreateManyItemInputEnvelope.schema';
import { ReturnedOrderWhereUniqueInputObjectSchema as ReturnedOrderWhereUniqueInputObjectSchema } from './ReturnedOrderWhereUniqueInput.schema';
import { ReturnedOrderUpdateWithWhereUniqueWithoutItemInputObjectSchema as ReturnedOrderUpdateWithWhereUniqueWithoutItemInputObjectSchema } from './ReturnedOrderUpdateWithWhereUniqueWithoutItemInput.schema';
import { ReturnedOrderUpdateManyWithWhereWithoutItemInputObjectSchema as ReturnedOrderUpdateManyWithWhereWithoutItemInputObjectSchema } from './ReturnedOrderUpdateManyWithWhereWithoutItemInput.schema';
import { ReturnedOrderScalarWhereInputObjectSchema as ReturnedOrderScalarWhereInputObjectSchema } from './ReturnedOrderScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReturnedOrderCreateWithoutItemInputObjectSchema), z.lazy(() => ReturnedOrderCreateWithoutItemInputObjectSchema).array(), z.lazy(() => ReturnedOrderUncheckedCreateWithoutItemInputObjectSchema), z.lazy(() => ReturnedOrderUncheckedCreateWithoutItemInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReturnedOrderCreateOrConnectWithoutItemInputObjectSchema), z.lazy(() => ReturnedOrderCreateOrConnectWithoutItemInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ReturnedOrderUpsertWithWhereUniqueWithoutItemInputObjectSchema), z.lazy(() => ReturnedOrderUpsertWithWhereUniqueWithoutItemInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReturnedOrderCreateManyItemInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ReturnedOrderWhereUniqueInputObjectSchema), z.lazy(() => ReturnedOrderWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ReturnedOrderWhereUniqueInputObjectSchema), z.lazy(() => ReturnedOrderWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ReturnedOrderWhereUniqueInputObjectSchema), z.lazy(() => ReturnedOrderWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ReturnedOrderWhereUniqueInputObjectSchema), z.lazy(() => ReturnedOrderWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ReturnedOrderUpdateWithWhereUniqueWithoutItemInputObjectSchema), z.lazy(() => ReturnedOrderUpdateWithWhereUniqueWithoutItemInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ReturnedOrderUpdateManyWithWhereWithoutItemInputObjectSchema), z.lazy(() => ReturnedOrderUpdateManyWithWhereWithoutItemInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ReturnedOrderScalarWhereInputObjectSchema), z.lazy(() => ReturnedOrderScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ReturnedOrderUpdateManyWithoutItemNestedInputObjectSchema: z.ZodType<Prisma.ReturnedOrderUpdateManyWithoutItemNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ReturnedOrderUpdateManyWithoutItemNestedInput>;
export const ReturnedOrderUpdateManyWithoutItemNestedInputObjectZodSchema = makeSchema();
