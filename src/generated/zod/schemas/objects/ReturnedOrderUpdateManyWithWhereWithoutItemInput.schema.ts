import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ReturnedOrderScalarWhereInputObjectSchema as ReturnedOrderScalarWhereInputObjectSchema } from './ReturnedOrderScalarWhereInput.schema';
import { ReturnedOrderUpdateManyMutationInputObjectSchema as ReturnedOrderUpdateManyMutationInputObjectSchema } from './ReturnedOrderUpdateManyMutationInput.schema';
import { ReturnedOrderUncheckedUpdateManyWithoutItemInputObjectSchema as ReturnedOrderUncheckedUpdateManyWithoutItemInputObjectSchema } from './ReturnedOrderUncheckedUpdateManyWithoutItemInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReturnedOrderScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ReturnedOrderUpdateManyMutationInputObjectSchema), z.lazy(() => ReturnedOrderUncheckedUpdateManyWithoutItemInputObjectSchema)])
}).strict();
export const ReturnedOrderUpdateManyWithWhereWithoutItemInputObjectSchema: z.ZodType<Prisma.ReturnedOrderUpdateManyWithWhereWithoutItemInput> = makeSchema() as unknown as z.ZodType<Prisma.ReturnedOrderUpdateManyWithWhereWithoutItemInput>;
export const ReturnedOrderUpdateManyWithWhereWithoutItemInputObjectZodSchema = makeSchema();
