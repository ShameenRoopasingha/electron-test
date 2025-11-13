import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CheckoutCreateWithoutBillInputObjectSchema as CheckoutCreateWithoutBillInputObjectSchema } from './CheckoutCreateWithoutBillInput.schema';
import { CheckoutUncheckedCreateWithoutBillInputObjectSchema as CheckoutUncheckedCreateWithoutBillInputObjectSchema } from './CheckoutUncheckedCreateWithoutBillInput.schema';
import { CheckoutCreateOrConnectWithoutBillInputObjectSchema as CheckoutCreateOrConnectWithoutBillInputObjectSchema } from './CheckoutCreateOrConnectWithoutBillInput.schema';
import { CheckoutCreateManyBillInputEnvelopeObjectSchema as CheckoutCreateManyBillInputEnvelopeObjectSchema } from './CheckoutCreateManyBillInputEnvelope.schema';
import { CheckoutWhereUniqueInputObjectSchema as CheckoutWhereUniqueInputObjectSchema } from './CheckoutWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CheckoutCreateWithoutBillInputObjectSchema), z.lazy(() => CheckoutCreateWithoutBillInputObjectSchema).array(), z.lazy(() => CheckoutUncheckedCreateWithoutBillInputObjectSchema), z.lazy(() => CheckoutUncheckedCreateWithoutBillInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CheckoutCreateOrConnectWithoutBillInputObjectSchema), z.lazy(() => CheckoutCreateOrConnectWithoutBillInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CheckoutCreateManyBillInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => CheckoutWhereUniqueInputObjectSchema), z.lazy(() => CheckoutWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const CheckoutCreateNestedManyWithoutBillInputObjectSchema: z.ZodType<Prisma.CheckoutCreateNestedManyWithoutBillInput> = makeSchema() as unknown as z.ZodType<Prisma.CheckoutCreateNestedManyWithoutBillInput>;
export const CheckoutCreateNestedManyWithoutBillInputObjectZodSchema = makeSchema();
