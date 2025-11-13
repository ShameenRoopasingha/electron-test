import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { BillWhereUniqueInputObjectSchema as BillWhereUniqueInputObjectSchema } from './BillWhereUniqueInput.schema';
import { BillUpdateWithoutCustomerInputObjectSchema as BillUpdateWithoutCustomerInputObjectSchema } from './BillUpdateWithoutCustomerInput.schema';
import { BillUncheckedUpdateWithoutCustomerInputObjectSchema as BillUncheckedUpdateWithoutCustomerInputObjectSchema } from './BillUncheckedUpdateWithoutCustomerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BillWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => BillUpdateWithoutCustomerInputObjectSchema), z.lazy(() => BillUncheckedUpdateWithoutCustomerInputObjectSchema)])
}).strict();
export const BillUpdateWithWhereUniqueWithoutCustomerInputObjectSchema: z.ZodType<Prisma.BillUpdateWithWhereUniqueWithoutCustomerInput> = makeSchema() as unknown as z.ZodType<Prisma.BillUpdateWithWhereUniqueWithoutCustomerInput>;
export const BillUpdateWithWhereUniqueWithoutCustomerInputObjectZodSchema = makeSchema();
