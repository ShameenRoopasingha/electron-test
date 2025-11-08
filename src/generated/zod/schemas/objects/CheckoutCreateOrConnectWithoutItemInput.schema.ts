import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CheckoutWhereUniqueInputObjectSchema as CheckoutWhereUniqueInputObjectSchema } from './CheckoutWhereUniqueInput.schema';
import { CheckoutCreateWithoutItemInputObjectSchema as CheckoutCreateWithoutItemInputObjectSchema } from './CheckoutCreateWithoutItemInput.schema';
import { CheckoutUncheckedCreateWithoutItemInputObjectSchema as CheckoutUncheckedCreateWithoutItemInputObjectSchema } from './CheckoutUncheckedCreateWithoutItemInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CheckoutWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CheckoutCreateWithoutItemInputObjectSchema), z.lazy(() => CheckoutUncheckedCreateWithoutItemInputObjectSchema)])
}).strict();
export const CheckoutCreateOrConnectWithoutItemInputObjectSchema: z.ZodType<Prisma.CheckoutCreateOrConnectWithoutItemInput> = makeSchema() as unknown as z.ZodType<Prisma.CheckoutCreateOrConnectWithoutItemInput>;
export const CheckoutCreateOrConnectWithoutItemInputObjectZodSchema = makeSchema();
