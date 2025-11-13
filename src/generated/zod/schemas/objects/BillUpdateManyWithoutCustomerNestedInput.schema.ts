import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { BillCreateWithoutCustomerInputObjectSchema as BillCreateWithoutCustomerInputObjectSchema } from './BillCreateWithoutCustomerInput.schema';
import { BillUncheckedCreateWithoutCustomerInputObjectSchema as BillUncheckedCreateWithoutCustomerInputObjectSchema } from './BillUncheckedCreateWithoutCustomerInput.schema';
import { BillCreateOrConnectWithoutCustomerInputObjectSchema as BillCreateOrConnectWithoutCustomerInputObjectSchema } from './BillCreateOrConnectWithoutCustomerInput.schema';
import { BillUpsertWithWhereUniqueWithoutCustomerInputObjectSchema as BillUpsertWithWhereUniqueWithoutCustomerInputObjectSchema } from './BillUpsertWithWhereUniqueWithoutCustomerInput.schema';
import { BillCreateManyCustomerInputEnvelopeObjectSchema as BillCreateManyCustomerInputEnvelopeObjectSchema } from './BillCreateManyCustomerInputEnvelope.schema';
import { BillWhereUniqueInputObjectSchema as BillWhereUniqueInputObjectSchema } from './BillWhereUniqueInput.schema';
import { BillUpdateWithWhereUniqueWithoutCustomerInputObjectSchema as BillUpdateWithWhereUniqueWithoutCustomerInputObjectSchema } from './BillUpdateWithWhereUniqueWithoutCustomerInput.schema';
import { BillUpdateManyWithWhereWithoutCustomerInputObjectSchema as BillUpdateManyWithWhereWithoutCustomerInputObjectSchema } from './BillUpdateManyWithWhereWithoutCustomerInput.schema';
import { BillScalarWhereInputObjectSchema as BillScalarWhereInputObjectSchema } from './BillScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => BillCreateWithoutCustomerInputObjectSchema), z.lazy(() => BillCreateWithoutCustomerInputObjectSchema).array(), z.lazy(() => BillUncheckedCreateWithoutCustomerInputObjectSchema), z.lazy(() => BillUncheckedCreateWithoutCustomerInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => BillCreateOrConnectWithoutCustomerInputObjectSchema), z.lazy(() => BillCreateOrConnectWithoutCustomerInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => BillUpsertWithWhereUniqueWithoutCustomerInputObjectSchema), z.lazy(() => BillUpsertWithWhereUniqueWithoutCustomerInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => BillCreateManyCustomerInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => BillWhereUniqueInputObjectSchema), z.lazy(() => BillWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => BillWhereUniqueInputObjectSchema), z.lazy(() => BillWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => BillWhereUniqueInputObjectSchema), z.lazy(() => BillWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => BillWhereUniqueInputObjectSchema), z.lazy(() => BillWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => BillUpdateWithWhereUniqueWithoutCustomerInputObjectSchema), z.lazy(() => BillUpdateWithWhereUniqueWithoutCustomerInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => BillUpdateManyWithWhereWithoutCustomerInputObjectSchema), z.lazy(() => BillUpdateManyWithWhereWithoutCustomerInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => BillScalarWhereInputObjectSchema), z.lazy(() => BillScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const BillUpdateManyWithoutCustomerNestedInputObjectSchema: z.ZodType<Prisma.BillUpdateManyWithoutCustomerNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.BillUpdateManyWithoutCustomerNestedInput>;
export const BillUpdateManyWithoutCustomerNestedInputObjectZodSchema = makeSchema();
