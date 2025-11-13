import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ReturnedOrderWhereUniqueInputObjectSchema as ReturnedOrderWhereUniqueInputObjectSchema } from './ReturnedOrderWhereUniqueInput.schema';
import { ReturnedOrderUpdateWithoutBillInputObjectSchema as ReturnedOrderUpdateWithoutBillInputObjectSchema } from './ReturnedOrderUpdateWithoutBillInput.schema';
import { ReturnedOrderUncheckedUpdateWithoutBillInputObjectSchema as ReturnedOrderUncheckedUpdateWithoutBillInputObjectSchema } from './ReturnedOrderUncheckedUpdateWithoutBillInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReturnedOrderWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ReturnedOrderUpdateWithoutBillInputObjectSchema), z.lazy(() => ReturnedOrderUncheckedUpdateWithoutBillInputObjectSchema)])
}).strict();
export const ReturnedOrderUpdateWithWhereUniqueWithoutBillInputObjectSchema: z.ZodType<Prisma.ReturnedOrderUpdateWithWhereUniqueWithoutBillInput> = makeSchema() as unknown as z.ZodType<Prisma.ReturnedOrderUpdateWithWhereUniqueWithoutBillInput>;
export const ReturnedOrderUpdateWithWhereUniqueWithoutBillInputObjectZodSchema = makeSchema();
