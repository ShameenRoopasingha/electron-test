import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { BillWhereUniqueInputObjectSchema as BillWhereUniqueInputObjectSchema } from './BillWhereUniqueInput.schema';
import { BillUpdateWithoutCustomerInputObjectSchema as BillUpdateWithoutCustomerInputObjectSchema } from './BillUpdateWithoutCustomerInput.schema';
import { BillUncheckedUpdateWithoutCustomerInputObjectSchema as BillUncheckedUpdateWithoutCustomerInputObjectSchema } from './BillUncheckedUpdateWithoutCustomerInput.schema';
import { BillCreateWithoutCustomerInputObjectSchema as BillCreateWithoutCustomerInputObjectSchema } from './BillCreateWithoutCustomerInput.schema';
import { BillUncheckedCreateWithoutCustomerInputObjectSchema as BillUncheckedCreateWithoutCustomerInputObjectSchema } from './BillUncheckedCreateWithoutCustomerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BillWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => BillUpdateWithoutCustomerInputObjectSchema), z.lazy(() => BillUncheckedUpdateWithoutCustomerInputObjectSchema)]),
  create: z.union([z.lazy(() => BillCreateWithoutCustomerInputObjectSchema), z.lazy(() => BillUncheckedCreateWithoutCustomerInputObjectSchema)])
}).strict();
export const BillUpsertWithWhereUniqueWithoutCustomerInputObjectSchema: z.ZodType<Prisma.BillUpsertWithWhereUniqueWithoutCustomerInput> = makeSchema() as unknown as z.ZodType<Prisma.BillUpsertWithWhereUniqueWithoutCustomerInput>;
export const BillUpsertWithWhereUniqueWithoutCustomerInputObjectZodSchema = makeSchema();
