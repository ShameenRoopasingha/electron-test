import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { BillUpdateWithoutReturnedOrdersInputObjectSchema as BillUpdateWithoutReturnedOrdersInputObjectSchema } from './BillUpdateWithoutReturnedOrdersInput.schema';
import { BillUncheckedUpdateWithoutReturnedOrdersInputObjectSchema as BillUncheckedUpdateWithoutReturnedOrdersInputObjectSchema } from './BillUncheckedUpdateWithoutReturnedOrdersInput.schema';
import { BillCreateWithoutReturnedOrdersInputObjectSchema as BillCreateWithoutReturnedOrdersInputObjectSchema } from './BillCreateWithoutReturnedOrdersInput.schema';
import { BillUncheckedCreateWithoutReturnedOrdersInputObjectSchema as BillUncheckedCreateWithoutReturnedOrdersInputObjectSchema } from './BillUncheckedCreateWithoutReturnedOrdersInput.schema';
import { BillWhereInputObjectSchema as BillWhereInputObjectSchema } from './BillWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => BillUpdateWithoutReturnedOrdersInputObjectSchema), z.lazy(() => BillUncheckedUpdateWithoutReturnedOrdersInputObjectSchema)]),
  create: z.union([z.lazy(() => BillCreateWithoutReturnedOrdersInputObjectSchema), z.lazy(() => BillUncheckedCreateWithoutReturnedOrdersInputObjectSchema)]),
  where: z.lazy(() => BillWhereInputObjectSchema).optional()
}).strict();
export const BillUpsertWithoutReturnedOrdersInputObjectSchema: z.ZodType<Prisma.BillUpsertWithoutReturnedOrdersInput> = makeSchema() as unknown as z.ZodType<Prisma.BillUpsertWithoutReturnedOrdersInput>;
export const BillUpsertWithoutReturnedOrdersInputObjectZodSchema = makeSchema();
