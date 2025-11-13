import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CustomerWhereInputObjectSchema as CustomerWhereInputObjectSchema } from './CustomerWhereInput.schema';
import { CustomerUpdateWithoutBillsInputObjectSchema as CustomerUpdateWithoutBillsInputObjectSchema } from './CustomerUpdateWithoutBillsInput.schema';
import { CustomerUncheckedUpdateWithoutBillsInputObjectSchema as CustomerUncheckedUpdateWithoutBillsInputObjectSchema } from './CustomerUncheckedUpdateWithoutBillsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CustomerWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => CustomerUpdateWithoutBillsInputObjectSchema), z.lazy(() => CustomerUncheckedUpdateWithoutBillsInputObjectSchema)])
}).strict();
export const CustomerUpdateToOneWithWhereWithoutBillsInputObjectSchema: z.ZodType<Prisma.CustomerUpdateToOneWithWhereWithoutBillsInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerUpdateToOneWithWhereWithoutBillsInput>;
export const CustomerUpdateToOneWithWhereWithoutBillsInputObjectZodSchema = makeSchema();
