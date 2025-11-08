import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { BillWhereInputObjectSchema as BillWhereInputObjectSchema } from './BillWhereInput.schema';
import { BillUpdateWithoutReturnedOrdersInputObjectSchema as BillUpdateWithoutReturnedOrdersInputObjectSchema } from './BillUpdateWithoutReturnedOrdersInput.schema';
import { BillUncheckedUpdateWithoutReturnedOrdersInputObjectSchema as BillUncheckedUpdateWithoutReturnedOrdersInputObjectSchema } from './BillUncheckedUpdateWithoutReturnedOrdersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BillWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => BillUpdateWithoutReturnedOrdersInputObjectSchema), z.lazy(() => BillUncheckedUpdateWithoutReturnedOrdersInputObjectSchema)])
}).strict();
export const BillUpdateToOneWithWhereWithoutReturnedOrdersInputObjectSchema: z.ZodType<Prisma.BillUpdateToOneWithWhereWithoutReturnedOrdersInput> = makeSchema() as unknown as z.ZodType<Prisma.BillUpdateToOneWithWhereWithoutReturnedOrdersInput>;
export const BillUpdateToOneWithWhereWithoutReturnedOrdersInputObjectZodSchema = makeSchema();
