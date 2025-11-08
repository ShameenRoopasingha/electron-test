import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CheckoutWhereUniqueInputObjectSchema as CheckoutWhereUniqueInputObjectSchema } from './CheckoutWhereUniqueInput.schema';
import { CheckoutUpdateWithoutItemInputObjectSchema as CheckoutUpdateWithoutItemInputObjectSchema } from './CheckoutUpdateWithoutItemInput.schema';
import { CheckoutUncheckedUpdateWithoutItemInputObjectSchema as CheckoutUncheckedUpdateWithoutItemInputObjectSchema } from './CheckoutUncheckedUpdateWithoutItemInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CheckoutWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => CheckoutUpdateWithoutItemInputObjectSchema), z.lazy(() => CheckoutUncheckedUpdateWithoutItemInputObjectSchema)])
}).strict();
export const CheckoutUpdateWithWhereUniqueWithoutItemInputObjectSchema: z.ZodType<Prisma.CheckoutUpdateWithWhereUniqueWithoutItemInput> = makeSchema() as unknown as z.ZodType<Prisma.CheckoutUpdateWithWhereUniqueWithoutItemInput>;
export const CheckoutUpdateWithWhereUniqueWithoutItemInputObjectZodSchema = makeSchema();
