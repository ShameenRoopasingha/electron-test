import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CheckoutWhereUniqueInputObjectSchema as CheckoutWhereUniqueInputObjectSchema } from './CheckoutWhereUniqueInput.schema';
import { CheckoutUpdateWithoutBillInputObjectSchema as CheckoutUpdateWithoutBillInputObjectSchema } from './CheckoutUpdateWithoutBillInput.schema';
import { CheckoutUncheckedUpdateWithoutBillInputObjectSchema as CheckoutUncheckedUpdateWithoutBillInputObjectSchema } from './CheckoutUncheckedUpdateWithoutBillInput.schema';
import { CheckoutCreateWithoutBillInputObjectSchema as CheckoutCreateWithoutBillInputObjectSchema } from './CheckoutCreateWithoutBillInput.schema';
import { CheckoutUncheckedCreateWithoutBillInputObjectSchema as CheckoutUncheckedCreateWithoutBillInputObjectSchema } from './CheckoutUncheckedCreateWithoutBillInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CheckoutWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => CheckoutUpdateWithoutBillInputObjectSchema), z.lazy(() => CheckoutUncheckedUpdateWithoutBillInputObjectSchema)]),
  create: z.union([z.lazy(() => CheckoutCreateWithoutBillInputObjectSchema), z.lazy(() => CheckoutUncheckedCreateWithoutBillInputObjectSchema)])
}).strict();
export const CheckoutUpsertWithWhereUniqueWithoutBillInputObjectSchema: z.ZodType<Prisma.CheckoutUpsertWithWhereUniqueWithoutBillInput> = makeSchema() as unknown as z.ZodType<Prisma.CheckoutUpsertWithWhereUniqueWithoutBillInput>;
export const CheckoutUpsertWithWhereUniqueWithoutBillInputObjectZodSchema = makeSchema();
