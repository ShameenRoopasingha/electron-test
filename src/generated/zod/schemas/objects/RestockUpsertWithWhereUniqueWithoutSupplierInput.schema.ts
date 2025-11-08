import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RestockWhereUniqueInputObjectSchema as RestockWhereUniqueInputObjectSchema } from './RestockWhereUniqueInput.schema';
import { RestockUpdateWithoutSupplierInputObjectSchema as RestockUpdateWithoutSupplierInputObjectSchema } from './RestockUpdateWithoutSupplierInput.schema';
import { RestockUncheckedUpdateWithoutSupplierInputObjectSchema as RestockUncheckedUpdateWithoutSupplierInputObjectSchema } from './RestockUncheckedUpdateWithoutSupplierInput.schema';
import { RestockCreateWithoutSupplierInputObjectSchema as RestockCreateWithoutSupplierInputObjectSchema } from './RestockCreateWithoutSupplierInput.schema';
import { RestockUncheckedCreateWithoutSupplierInputObjectSchema as RestockUncheckedCreateWithoutSupplierInputObjectSchema } from './RestockUncheckedCreateWithoutSupplierInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RestockWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => RestockUpdateWithoutSupplierInputObjectSchema), z.lazy(() => RestockUncheckedUpdateWithoutSupplierInputObjectSchema)]),
  create: z.union([z.lazy(() => RestockCreateWithoutSupplierInputObjectSchema), z.lazy(() => RestockUncheckedCreateWithoutSupplierInputObjectSchema)])
}).strict();
export const RestockUpsertWithWhereUniqueWithoutSupplierInputObjectSchema: z.ZodType<Prisma.RestockUpsertWithWhereUniqueWithoutSupplierInput> = makeSchema() as unknown as z.ZodType<Prisma.RestockUpsertWithWhereUniqueWithoutSupplierInput>;
export const RestockUpsertWithWhereUniqueWithoutSupplierInputObjectZodSchema = makeSchema();
