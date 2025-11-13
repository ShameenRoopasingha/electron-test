import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RestockScalarWhereInputObjectSchema as RestockScalarWhereInputObjectSchema } from './RestockScalarWhereInput.schema';
import { RestockUpdateManyMutationInputObjectSchema as RestockUpdateManyMutationInputObjectSchema } from './RestockUpdateManyMutationInput.schema';
import { RestockUncheckedUpdateManyWithoutSupplierInputObjectSchema as RestockUncheckedUpdateManyWithoutSupplierInputObjectSchema } from './RestockUncheckedUpdateManyWithoutSupplierInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RestockScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => RestockUpdateManyMutationInputObjectSchema), z.lazy(() => RestockUncheckedUpdateManyWithoutSupplierInputObjectSchema)])
}).strict();
export const RestockUpdateManyWithWhereWithoutSupplierInputObjectSchema: z.ZodType<Prisma.RestockUpdateManyWithWhereWithoutSupplierInput> = makeSchema() as unknown as z.ZodType<Prisma.RestockUpdateManyWithWhereWithoutSupplierInput>;
export const RestockUpdateManyWithWhereWithoutSupplierInputObjectZodSchema = makeSchema();
