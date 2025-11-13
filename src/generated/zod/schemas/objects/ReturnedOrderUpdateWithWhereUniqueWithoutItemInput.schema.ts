import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ReturnedOrderWhereUniqueInputObjectSchema as ReturnedOrderWhereUniqueInputObjectSchema } from './ReturnedOrderWhereUniqueInput.schema';
import { ReturnedOrderUpdateWithoutItemInputObjectSchema as ReturnedOrderUpdateWithoutItemInputObjectSchema } from './ReturnedOrderUpdateWithoutItemInput.schema';
import { ReturnedOrderUncheckedUpdateWithoutItemInputObjectSchema as ReturnedOrderUncheckedUpdateWithoutItemInputObjectSchema } from './ReturnedOrderUncheckedUpdateWithoutItemInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReturnedOrderWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ReturnedOrderUpdateWithoutItemInputObjectSchema), z.lazy(() => ReturnedOrderUncheckedUpdateWithoutItemInputObjectSchema)])
}).strict();
export const ReturnedOrderUpdateWithWhereUniqueWithoutItemInputObjectSchema: z.ZodType<Prisma.ReturnedOrderUpdateWithWhereUniqueWithoutItemInput> = makeSchema() as unknown as z.ZodType<Prisma.ReturnedOrderUpdateWithWhereUniqueWithoutItemInput>;
export const ReturnedOrderUpdateWithWhereUniqueWithoutItemInputObjectZodSchema = makeSchema();
