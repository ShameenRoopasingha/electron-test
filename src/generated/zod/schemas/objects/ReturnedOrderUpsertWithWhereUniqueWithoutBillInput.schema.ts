import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ReturnedOrderWhereUniqueInputObjectSchema as ReturnedOrderWhereUniqueInputObjectSchema } from './ReturnedOrderWhereUniqueInput.schema';
import { ReturnedOrderUpdateWithoutBillInputObjectSchema as ReturnedOrderUpdateWithoutBillInputObjectSchema } from './ReturnedOrderUpdateWithoutBillInput.schema';
import { ReturnedOrderUncheckedUpdateWithoutBillInputObjectSchema as ReturnedOrderUncheckedUpdateWithoutBillInputObjectSchema } from './ReturnedOrderUncheckedUpdateWithoutBillInput.schema';
import { ReturnedOrderCreateWithoutBillInputObjectSchema as ReturnedOrderCreateWithoutBillInputObjectSchema } from './ReturnedOrderCreateWithoutBillInput.schema';
import { ReturnedOrderUncheckedCreateWithoutBillInputObjectSchema as ReturnedOrderUncheckedCreateWithoutBillInputObjectSchema } from './ReturnedOrderUncheckedCreateWithoutBillInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReturnedOrderWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ReturnedOrderUpdateWithoutBillInputObjectSchema), z.lazy(() => ReturnedOrderUncheckedUpdateWithoutBillInputObjectSchema)]),
  create: z.union([z.lazy(() => ReturnedOrderCreateWithoutBillInputObjectSchema), z.lazy(() => ReturnedOrderUncheckedCreateWithoutBillInputObjectSchema)])
}).strict();
export const ReturnedOrderUpsertWithWhereUniqueWithoutBillInputObjectSchema: z.ZodType<Prisma.ReturnedOrderUpsertWithWhereUniqueWithoutBillInput> = makeSchema() as unknown as z.ZodType<Prisma.ReturnedOrderUpsertWithWhereUniqueWithoutBillInput>;
export const ReturnedOrderUpsertWithWhereUniqueWithoutBillInputObjectZodSchema = makeSchema();
