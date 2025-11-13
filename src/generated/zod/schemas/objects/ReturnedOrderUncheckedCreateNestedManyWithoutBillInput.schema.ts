import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ReturnedOrderCreateWithoutBillInputObjectSchema as ReturnedOrderCreateWithoutBillInputObjectSchema } from './ReturnedOrderCreateWithoutBillInput.schema';
import { ReturnedOrderUncheckedCreateWithoutBillInputObjectSchema as ReturnedOrderUncheckedCreateWithoutBillInputObjectSchema } from './ReturnedOrderUncheckedCreateWithoutBillInput.schema';
import { ReturnedOrderCreateOrConnectWithoutBillInputObjectSchema as ReturnedOrderCreateOrConnectWithoutBillInputObjectSchema } from './ReturnedOrderCreateOrConnectWithoutBillInput.schema';
import { ReturnedOrderCreateManyBillInputEnvelopeObjectSchema as ReturnedOrderCreateManyBillInputEnvelopeObjectSchema } from './ReturnedOrderCreateManyBillInputEnvelope.schema';
import { ReturnedOrderWhereUniqueInputObjectSchema as ReturnedOrderWhereUniqueInputObjectSchema } from './ReturnedOrderWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReturnedOrderCreateWithoutBillInputObjectSchema), z.lazy(() => ReturnedOrderCreateWithoutBillInputObjectSchema).array(), z.lazy(() => ReturnedOrderUncheckedCreateWithoutBillInputObjectSchema), z.lazy(() => ReturnedOrderUncheckedCreateWithoutBillInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReturnedOrderCreateOrConnectWithoutBillInputObjectSchema), z.lazy(() => ReturnedOrderCreateOrConnectWithoutBillInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReturnedOrderCreateManyBillInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ReturnedOrderWhereUniqueInputObjectSchema), z.lazy(() => ReturnedOrderWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ReturnedOrderUncheckedCreateNestedManyWithoutBillInputObjectSchema: z.ZodType<Prisma.ReturnedOrderUncheckedCreateNestedManyWithoutBillInput> = makeSchema() as unknown as z.ZodType<Prisma.ReturnedOrderUncheckedCreateNestedManyWithoutBillInput>;
export const ReturnedOrderUncheckedCreateNestedManyWithoutBillInputObjectZodSchema = makeSchema();
