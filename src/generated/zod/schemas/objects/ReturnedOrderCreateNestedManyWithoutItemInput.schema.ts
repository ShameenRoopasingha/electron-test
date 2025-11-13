import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ReturnedOrderCreateWithoutItemInputObjectSchema as ReturnedOrderCreateWithoutItemInputObjectSchema } from './ReturnedOrderCreateWithoutItemInput.schema';
import { ReturnedOrderUncheckedCreateWithoutItemInputObjectSchema as ReturnedOrderUncheckedCreateWithoutItemInputObjectSchema } from './ReturnedOrderUncheckedCreateWithoutItemInput.schema';
import { ReturnedOrderCreateOrConnectWithoutItemInputObjectSchema as ReturnedOrderCreateOrConnectWithoutItemInputObjectSchema } from './ReturnedOrderCreateOrConnectWithoutItemInput.schema';
import { ReturnedOrderCreateManyItemInputEnvelopeObjectSchema as ReturnedOrderCreateManyItemInputEnvelopeObjectSchema } from './ReturnedOrderCreateManyItemInputEnvelope.schema';
import { ReturnedOrderWhereUniqueInputObjectSchema as ReturnedOrderWhereUniqueInputObjectSchema } from './ReturnedOrderWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReturnedOrderCreateWithoutItemInputObjectSchema), z.lazy(() => ReturnedOrderCreateWithoutItemInputObjectSchema).array(), z.lazy(() => ReturnedOrderUncheckedCreateWithoutItemInputObjectSchema), z.lazy(() => ReturnedOrderUncheckedCreateWithoutItemInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReturnedOrderCreateOrConnectWithoutItemInputObjectSchema), z.lazy(() => ReturnedOrderCreateOrConnectWithoutItemInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReturnedOrderCreateManyItemInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ReturnedOrderWhereUniqueInputObjectSchema), z.lazy(() => ReturnedOrderWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ReturnedOrderCreateNestedManyWithoutItemInputObjectSchema: z.ZodType<Prisma.ReturnedOrderCreateNestedManyWithoutItemInput> = makeSchema() as unknown as z.ZodType<Prisma.ReturnedOrderCreateNestedManyWithoutItemInput>;
export const ReturnedOrderCreateNestedManyWithoutItemInputObjectZodSchema = makeSchema();
