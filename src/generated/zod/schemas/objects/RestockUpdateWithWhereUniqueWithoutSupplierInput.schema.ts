import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RestockWhereUniqueInputObjectSchema as RestockWhereUniqueInputObjectSchema } from './RestockWhereUniqueInput.schema';
import { RestockUpdateWithoutSupplierInputObjectSchema as RestockUpdateWithoutSupplierInputObjectSchema } from './RestockUpdateWithoutSupplierInput.schema';
import { RestockUncheckedUpdateWithoutSupplierInputObjectSchema as RestockUncheckedUpdateWithoutSupplierInputObjectSchema } from './RestockUncheckedUpdateWithoutSupplierInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RestockWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => RestockUpdateWithoutSupplierInputObjectSchema), z.lazy(() => RestockUncheckedUpdateWithoutSupplierInputObjectSchema)])
}).strict();
export const RestockUpdateWithWhereUniqueWithoutSupplierInputObjectSchema: z.ZodType<Prisma.RestockUpdateWithWhereUniqueWithoutSupplierInput> = makeSchema() as unknown as z.ZodType<Prisma.RestockUpdateWithWhereUniqueWithoutSupplierInput>;
export const RestockUpdateWithWhereUniqueWithoutSupplierInputObjectZodSchema = makeSchema();
