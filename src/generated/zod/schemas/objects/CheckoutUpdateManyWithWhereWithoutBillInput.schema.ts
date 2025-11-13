import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CheckoutScalarWhereInputObjectSchema as CheckoutScalarWhereInputObjectSchema } from './CheckoutScalarWhereInput.schema';
import { CheckoutUpdateManyMutationInputObjectSchema as CheckoutUpdateManyMutationInputObjectSchema } from './CheckoutUpdateManyMutationInput.schema';
import { CheckoutUncheckedUpdateManyWithoutBillInputObjectSchema as CheckoutUncheckedUpdateManyWithoutBillInputObjectSchema } from './CheckoutUncheckedUpdateManyWithoutBillInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CheckoutScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => CheckoutUpdateManyMutationInputObjectSchema), z.lazy(() => CheckoutUncheckedUpdateManyWithoutBillInputObjectSchema)])
}).strict();
export const CheckoutUpdateManyWithWhereWithoutBillInputObjectSchema: z.ZodType<Prisma.CheckoutUpdateManyWithWhereWithoutBillInput> = makeSchema() as unknown as z.ZodType<Prisma.CheckoutUpdateManyWithWhereWithoutBillInput>;
export const CheckoutUpdateManyWithWhereWithoutBillInputObjectZodSchema = makeSchema();
