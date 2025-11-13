import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CheckoutWhereUniqueInputObjectSchema as CheckoutWhereUniqueInputObjectSchema } from './CheckoutWhereUniqueInput.schema';
import { CheckoutUpdateWithoutItemInputObjectSchema as CheckoutUpdateWithoutItemInputObjectSchema } from './CheckoutUpdateWithoutItemInput.schema';
import { CheckoutUncheckedUpdateWithoutItemInputObjectSchema as CheckoutUncheckedUpdateWithoutItemInputObjectSchema } from './CheckoutUncheckedUpdateWithoutItemInput.schema';
import { CheckoutCreateWithoutItemInputObjectSchema as CheckoutCreateWithoutItemInputObjectSchema } from './CheckoutCreateWithoutItemInput.schema';
import { CheckoutUncheckedCreateWithoutItemInputObjectSchema as CheckoutUncheckedCreateWithoutItemInputObjectSchema } from './CheckoutUncheckedCreateWithoutItemInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CheckoutWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => CheckoutUpdateWithoutItemInputObjectSchema), z.lazy(() => CheckoutUncheckedUpdateWithoutItemInputObjectSchema)]),
  create: z.union([z.lazy(() => CheckoutCreateWithoutItemInputObjectSchema), z.lazy(() => CheckoutUncheckedCreateWithoutItemInputObjectSchema)])
}).strict();
export const CheckoutUpsertWithWhereUniqueWithoutItemInputObjectSchema: z.ZodType<Prisma.CheckoutUpsertWithWhereUniqueWithoutItemInput> = makeSchema() as unknown as z.ZodType<Prisma.CheckoutUpsertWithWhereUniqueWithoutItemInput>;
export const CheckoutUpsertWithWhereUniqueWithoutItemInputObjectZodSchema = makeSchema();
