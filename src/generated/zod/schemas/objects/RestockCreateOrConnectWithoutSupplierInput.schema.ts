import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RestockWhereUniqueInputObjectSchema as RestockWhereUniqueInputObjectSchema } from './RestockWhereUniqueInput.schema';
import { RestockCreateWithoutSupplierInputObjectSchema as RestockCreateWithoutSupplierInputObjectSchema } from './RestockCreateWithoutSupplierInput.schema';
import { RestockUncheckedCreateWithoutSupplierInputObjectSchema as RestockUncheckedCreateWithoutSupplierInputObjectSchema } from './RestockUncheckedCreateWithoutSupplierInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RestockWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => RestockCreateWithoutSupplierInputObjectSchema), z.lazy(() => RestockUncheckedCreateWithoutSupplierInputObjectSchema)])
}).strict();
export const RestockCreateOrConnectWithoutSupplierInputObjectSchema: z.ZodType<Prisma.RestockCreateOrConnectWithoutSupplierInput> = makeSchema() as unknown as z.ZodType<Prisma.RestockCreateOrConnectWithoutSupplierInput>;
export const RestockCreateOrConnectWithoutSupplierInputObjectZodSchema = makeSchema();
