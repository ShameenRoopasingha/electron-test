import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { BillScalarWhereInputObjectSchema as BillScalarWhereInputObjectSchema } from './BillScalarWhereInput.schema';
import { BillUpdateManyMutationInputObjectSchema as BillUpdateManyMutationInputObjectSchema } from './BillUpdateManyMutationInput.schema';
import { BillUncheckedUpdateManyWithoutCustomerInputObjectSchema as BillUncheckedUpdateManyWithoutCustomerInputObjectSchema } from './BillUncheckedUpdateManyWithoutCustomerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BillScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => BillUpdateManyMutationInputObjectSchema), z.lazy(() => BillUncheckedUpdateManyWithoutCustomerInputObjectSchema)])
}).strict();
export const BillUpdateManyWithWhereWithoutCustomerInputObjectSchema: z.ZodType<Prisma.BillUpdateManyWithWhereWithoutCustomerInput> = makeSchema() as unknown as z.ZodType<Prisma.BillUpdateManyWithWhereWithoutCustomerInput>;
export const BillUpdateManyWithWhereWithoutCustomerInputObjectZodSchema = makeSchema();
