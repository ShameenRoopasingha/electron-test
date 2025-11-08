import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CheckoutScalarWhereInputObjectSchema as CheckoutScalarWhereInputObjectSchema } from './CheckoutScalarWhereInput.schema';
import { CheckoutUpdateManyMutationInputObjectSchema as CheckoutUpdateManyMutationInputObjectSchema } from './CheckoutUpdateManyMutationInput.schema';
import { CheckoutUncheckedUpdateManyWithoutItemInputObjectSchema as CheckoutUncheckedUpdateManyWithoutItemInputObjectSchema } from './CheckoutUncheckedUpdateManyWithoutItemInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CheckoutScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => CheckoutUpdateManyMutationInputObjectSchema), z.lazy(() => CheckoutUncheckedUpdateManyWithoutItemInputObjectSchema)])
}).strict();
export const CheckoutUpdateManyWithWhereWithoutItemInputObjectSchema: z.ZodType<Prisma.CheckoutUpdateManyWithWhereWithoutItemInput> = makeSchema() as unknown as z.ZodType<Prisma.CheckoutUpdateManyWithWhereWithoutItemInput>;
export const CheckoutUpdateManyWithWhereWithoutItemInputObjectZodSchema = makeSchema();
