import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CheckoutWhereUniqueInputObjectSchema as CheckoutWhereUniqueInputObjectSchema } from './CheckoutWhereUniqueInput.schema';
import { CheckoutUpdateWithoutBillInputObjectSchema as CheckoutUpdateWithoutBillInputObjectSchema } from './CheckoutUpdateWithoutBillInput.schema';
import { CheckoutUncheckedUpdateWithoutBillInputObjectSchema as CheckoutUncheckedUpdateWithoutBillInputObjectSchema } from './CheckoutUncheckedUpdateWithoutBillInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CheckoutWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => CheckoutUpdateWithoutBillInputObjectSchema), z.lazy(() => CheckoutUncheckedUpdateWithoutBillInputObjectSchema)])
}).strict();
export const CheckoutUpdateWithWhereUniqueWithoutBillInputObjectSchema: z.ZodType<Prisma.CheckoutUpdateWithWhereUniqueWithoutBillInput> = makeSchema() as unknown as z.ZodType<Prisma.CheckoutUpdateWithWhereUniqueWithoutBillInput>;
export const CheckoutUpdateWithWhereUniqueWithoutBillInputObjectZodSchema = makeSchema();
