import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CheckoutWhereUniqueInputObjectSchema as CheckoutWhereUniqueInputObjectSchema } from './CheckoutWhereUniqueInput.schema';
import { CheckoutCreateWithoutBillInputObjectSchema as CheckoutCreateWithoutBillInputObjectSchema } from './CheckoutCreateWithoutBillInput.schema';
import { CheckoutUncheckedCreateWithoutBillInputObjectSchema as CheckoutUncheckedCreateWithoutBillInputObjectSchema } from './CheckoutUncheckedCreateWithoutBillInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CheckoutWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CheckoutCreateWithoutBillInputObjectSchema), z.lazy(() => CheckoutUncheckedCreateWithoutBillInputObjectSchema)])
}).strict();
export const CheckoutCreateOrConnectWithoutBillInputObjectSchema: z.ZodType<Prisma.CheckoutCreateOrConnectWithoutBillInput> = makeSchema() as unknown as z.ZodType<Prisma.CheckoutCreateOrConnectWithoutBillInput>;
export const CheckoutCreateOrConnectWithoutBillInputObjectZodSchema = makeSchema();
