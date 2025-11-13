import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ReturnedOrderWhereUniqueInputObjectSchema as ReturnedOrderWhereUniqueInputObjectSchema } from './ReturnedOrderWhereUniqueInput.schema';
import { ReturnedOrderCreateWithoutBillInputObjectSchema as ReturnedOrderCreateWithoutBillInputObjectSchema } from './ReturnedOrderCreateWithoutBillInput.schema';
import { ReturnedOrderUncheckedCreateWithoutBillInputObjectSchema as ReturnedOrderUncheckedCreateWithoutBillInputObjectSchema } from './ReturnedOrderUncheckedCreateWithoutBillInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReturnedOrderWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ReturnedOrderCreateWithoutBillInputObjectSchema), z.lazy(() => ReturnedOrderUncheckedCreateWithoutBillInputObjectSchema)])
}).strict();
export const ReturnedOrderCreateOrConnectWithoutBillInputObjectSchema: z.ZodType<Prisma.ReturnedOrderCreateOrConnectWithoutBillInput> = makeSchema() as unknown as z.ZodType<Prisma.ReturnedOrderCreateOrConnectWithoutBillInput>;
export const ReturnedOrderCreateOrConnectWithoutBillInputObjectZodSchema = makeSchema();
