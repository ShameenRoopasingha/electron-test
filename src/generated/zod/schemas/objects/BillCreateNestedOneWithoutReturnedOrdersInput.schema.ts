import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { BillCreateWithoutReturnedOrdersInputObjectSchema as BillCreateWithoutReturnedOrdersInputObjectSchema } from './BillCreateWithoutReturnedOrdersInput.schema';
import { BillUncheckedCreateWithoutReturnedOrdersInputObjectSchema as BillUncheckedCreateWithoutReturnedOrdersInputObjectSchema } from './BillUncheckedCreateWithoutReturnedOrdersInput.schema';
import { BillCreateOrConnectWithoutReturnedOrdersInputObjectSchema as BillCreateOrConnectWithoutReturnedOrdersInputObjectSchema } from './BillCreateOrConnectWithoutReturnedOrdersInput.schema';
import { BillWhereUniqueInputObjectSchema as BillWhereUniqueInputObjectSchema } from './BillWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => BillCreateWithoutReturnedOrdersInputObjectSchema), z.lazy(() => BillUncheckedCreateWithoutReturnedOrdersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => BillCreateOrConnectWithoutReturnedOrdersInputObjectSchema).optional(),
  connect: z.lazy(() => BillWhereUniqueInputObjectSchema).optional()
}).strict();
export const BillCreateNestedOneWithoutReturnedOrdersInputObjectSchema: z.ZodType<Prisma.BillCreateNestedOneWithoutReturnedOrdersInput> = makeSchema() as unknown as z.ZodType<Prisma.BillCreateNestedOneWithoutReturnedOrdersInput>;
export const BillCreateNestedOneWithoutReturnedOrdersInputObjectZodSchema = makeSchema();
