import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ReturnedOrderWhereUniqueInputObjectSchema as ReturnedOrderWhereUniqueInputObjectSchema } from './ReturnedOrderWhereUniqueInput.schema';
import { ReturnedOrderUpdateWithoutItemInputObjectSchema as ReturnedOrderUpdateWithoutItemInputObjectSchema } from './ReturnedOrderUpdateWithoutItemInput.schema';
import { ReturnedOrderUncheckedUpdateWithoutItemInputObjectSchema as ReturnedOrderUncheckedUpdateWithoutItemInputObjectSchema } from './ReturnedOrderUncheckedUpdateWithoutItemInput.schema';
import { ReturnedOrderCreateWithoutItemInputObjectSchema as ReturnedOrderCreateWithoutItemInputObjectSchema } from './ReturnedOrderCreateWithoutItemInput.schema';
import { ReturnedOrderUncheckedCreateWithoutItemInputObjectSchema as ReturnedOrderUncheckedCreateWithoutItemInputObjectSchema } from './ReturnedOrderUncheckedCreateWithoutItemInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReturnedOrderWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ReturnedOrderUpdateWithoutItemInputObjectSchema), z.lazy(() => ReturnedOrderUncheckedUpdateWithoutItemInputObjectSchema)]),
  create: z.union([z.lazy(() => ReturnedOrderCreateWithoutItemInputObjectSchema), z.lazy(() => ReturnedOrderUncheckedCreateWithoutItemInputObjectSchema)])
}).strict();
export const ReturnedOrderUpsertWithWhereUniqueWithoutItemInputObjectSchema: z.ZodType<Prisma.ReturnedOrderUpsertWithWhereUniqueWithoutItemInput> = makeSchema() as unknown as z.ZodType<Prisma.ReturnedOrderUpsertWithWhereUniqueWithoutItemInput>;
export const ReturnedOrderUpsertWithWhereUniqueWithoutItemInputObjectZodSchema = makeSchema();
