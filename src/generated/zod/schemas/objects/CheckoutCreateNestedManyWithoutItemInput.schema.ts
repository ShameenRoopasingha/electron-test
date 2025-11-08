import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CheckoutCreateWithoutItemInputObjectSchema as CheckoutCreateWithoutItemInputObjectSchema } from './CheckoutCreateWithoutItemInput.schema';
import { CheckoutUncheckedCreateWithoutItemInputObjectSchema as CheckoutUncheckedCreateWithoutItemInputObjectSchema } from './CheckoutUncheckedCreateWithoutItemInput.schema';
import { CheckoutCreateOrConnectWithoutItemInputObjectSchema as CheckoutCreateOrConnectWithoutItemInputObjectSchema } from './CheckoutCreateOrConnectWithoutItemInput.schema';
import { CheckoutCreateManyItemInputEnvelopeObjectSchema as CheckoutCreateManyItemInputEnvelopeObjectSchema } from './CheckoutCreateManyItemInputEnvelope.schema';
import { CheckoutWhereUniqueInputObjectSchema as CheckoutWhereUniqueInputObjectSchema } from './CheckoutWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CheckoutCreateWithoutItemInputObjectSchema), z.lazy(() => CheckoutCreateWithoutItemInputObjectSchema).array(), z.lazy(() => CheckoutUncheckedCreateWithoutItemInputObjectSchema), z.lazy(() => CheckoutUncheckedCreateWithoutItemInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CheckoutCreateOrConnectWithoutItemInputObjectSchema), z.lazy(() => CheckoutCreateOrConnectWithoutItemInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CheckoutCreateManyItemInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => CheckoutWhereUniqueInputObjectSchema), z.lazy(() => CheckoutWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const CheckoutCreateNestedManyWithoutItemInputObjectSchema: z.ZodType<Prisma.CheckoutCreateNestedManyWithoutItemInput> = makeSchema() as unknown as z.ZodType<Prisma.CheckoutCreateNestedManyWithoutItemInput>;
export const CheckoutCreateNestedManyWithoutItemInputObjectZodSchema = makeSchema();
