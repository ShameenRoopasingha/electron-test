import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { BillWhereUniqueInputObjectSchema as BillWhereUniqueInputObjectSchema } from './BillWhereUniqueInput.schema';
import { BillCreateWithoutReturnedOrdersInputObjectSchema as BillCreateWithoutReturnedOrdersInputObjectSchema } from './BillCreateWithoutReturnedOrdersInput.schema';
import { BillUncheckedCreateWithoutReturnedOrdersInputObjectSchema as BillUncheckedCreateWithoutReturnedOrdersInputObjectSchema } from './BillUncheckedCreateWithoutReturnedOrdersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BillWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => BillCreateWithoutReturnedOrdersInputObjectSchema), z.lazy(() => BillUncheckedCreateWithoutReturnedOrdersInputObjectSchema)])
}).strict();
export const BillCreateOrConnectWithoutReturnedOrdersInputObjectSchema: z.ZodType<Prisma.BillCreateOrConnectWithoutReturnedOrdersInput> = makeSchema() as unknown as z.ZodType<Prisma.BillCreateOrConnectWithoutReturnedOrdersInput>;
export const BillCreateOrConnectWithoutReturnedOrdersInputObjectZodSchema = makeSchema();
