import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ItemScalarWhereInputObjectSchema as ItemScalarWhereInputObjectSchema } from './ItemScalarWhereInput.schema';
import { ItemUpdateManyMutationInputObjectSchema as ItemUpdateManyMutationInputObjectSchema } from './ItemUpdateManyMutationInput.schema';
import { ItemUncheckedUpdateManyWithoutSupplierInputObjectSchema as ItemUncheckedUpdateManyWithoutSupplierInputObjectSchema } from './ItemUncheckedUpdateManyWithoutSupplierInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ItemScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ItemUpdateManyMutationInputObjectSchema), z.lazy(() => ItemUncheckedUpdateManyWithoutSupplierInputObjectSchema)])
}).strict();
export const ItemUpdateManyWithWhereWithoutSupplierInputObjectSchema: z.ZodType<Prisma.ItemUpdateManyWithWhereWithoutSupplierInput> = makeSchema() as unknown as z.ZodType<Prisma.ItemUpdateManyWithWhereWithoutSupplierInput>;
export const ItemUpdateManyWithWhereWithoutSupplierInputObjectZodSchema = makeSchema();
