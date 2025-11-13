import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CustomerUpdateWithoutBillsInputObjectSchema as CustomerUpdateWithoutBillsInputObjectSchema } from './CustomerUpdateWithoutBillsInput.schema';
import { CustomerUncheckedUpdateWithoutBillsInputObjectSchema as CustomerUncheckedUpdateWithoutBillsInputObjectSchema } from './CustomerUncheckedUpdateWithoutBillsInput.schema';
import { CustomerCreateWithoutBillsInputObjectSchema as CustomerCreateWithoutBillsInputObjectSchema } from './CustomerCreateWithoutBillsInput.schema';
import { CustomerUncheckedCreateWithoutBillsInputObjectSchema as CustomerUncheckedCreateWithoutBillsInputObjectSchema } from './CustomerUncheckedCreateWithoutBillsInput.schema';
import { CustomerWhereInputObjectSchema as CustomerWhereInputObjectSchema } from './CustomerWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => CustomerUpdateWithoutBillsInputObjectSchema), z.lazy(() => CustomerUncheckedUpdateWithoutBillsInputObjectSchema)]),
  create: z.union([z.lazy(() => CustomerCreateWithoutBillsInputObjectSchema), z.lazy(() => CustomerUncheckedCreateWithoutBillsInputObjectSchema)]),
  where: z.lazy(() => CustomerWhereInputObjectSchema).optional()
}).strict();
export const CustomerUpsertWithoutBillsInputObjectSchema: z.ZodType<Prisma.CustomerUpsertWithoutBillsInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerUpsertWithoutBillsInput>;
export const CustomerUpsertWithoutBillsInputObjectZodSchema = makeSchema();
