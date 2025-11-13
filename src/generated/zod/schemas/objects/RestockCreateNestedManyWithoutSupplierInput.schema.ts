import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RestockCreateWithoutSupplierInputObjectSchema as RestockCreateWithoutSupplierInputObjectSchema } from './RestockCreateWithoutSupplierInput.schema';
import { RestockUncheckedCreateWithoutSupplierInputObjectSchema as RestockUncheckedCreateWithoutSupplierInputObjectSchema } from './RestockUncheckedCreateWithoutSupplierInput.schema';
import { RestockCreateOrConnectWithoutSupplierInputObjectSchema as RestockCreateOrConnectWithoutSupplierInputObjectSchema } from './RestockCreateOrConnectWithoutSupplierInput.schema';
import { RestockCreateManySupplierInputEnvelopeObjectSchema as RestockCreateManySupplierInputEnvelopeObjectSchema } from './RestockCreateManySupplierInputEnvelope.schema';
import { RestockWhereUniqueInputObjectSchema as RestockWhereUniqueInputObjectSchema } from './RestockWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => RestockCreateWithoutSupplierInputObjectSchema), z.lazy(() => RestockCreateWithoutSupplierInputObjectSchema).array(), z.lazy(() => RestockUncheckedCreateWithoutSupplierInputObjectSchema), z.lazy(() => RestockUncheckedCreateWithoutSupplierInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => RestockCreateOrConnectWithoutSupplierInputObjectSchema), z.lazy(() => RestockCreateOrConnectWithoutSupplierInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => RestockCreateManySupplierInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => RestockWhereUniqueInputObjectSchema), z.lazy(() => RestockWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const RestockCreateNestedManyWithoutSupplierInputObjectSchema: z.ZodType<Prisma.RestockCreateNestedManyWithoutSupplierInput> = makeSchema() as unknown as z.ZodType<Prisma.RestockCreateNestedManyWithoutSupplierInput>;
export const RestockCreateNestedManyWithoutSupplierInputObjectZodSchema = makeSchema();
