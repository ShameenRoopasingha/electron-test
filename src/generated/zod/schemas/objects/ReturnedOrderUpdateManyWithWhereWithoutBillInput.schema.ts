import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ReturnedOrderScalarWhereInputObjectSchema as ReturnedOrderScalarWhereInputObjectSchema } from './ReturnedOrderScalarWhereInput.schema';
import { ReturnedOrderUpdateManyMutationInputObjectSchema as ReturnedOrderUpdateManyMutationInputObjectSchema } from './ReturnedOrderUpdateManyMutationInput.schema';
import { ReturnedOrderUncheckedUpdateManyWithoutBillInputObjectSchema as ReturnedOrderUncheckedUpdateManyWithoutBillInputObjectSchema } from './ReturnedOrderUncheckedUpdateManyWithoutBillInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReturnedOrderScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ReturnedOrderUpdateManyMutationInputObjectSchema), z.lazy(() => ReturnedOrderUncheckedUpdateManyWithoutBillInputObjectSchema)])
}).strict();
export const ReturnedOrderUpdateManyWithWhereWithoutBillInputObjectSchema: z.ZodType<Prisma.ReturnedOrderUpdateManyWithWhereWithoutBillInput> = makeSchema() as unknown as z.ZodType<Prisma.ReturnedOrderUpdateManyWithWhereWithoutBillInput>;
export const ReturnedOrderUpdateManyWithWhereWithoutBillInputObjectZodSchema = makeSchema();
