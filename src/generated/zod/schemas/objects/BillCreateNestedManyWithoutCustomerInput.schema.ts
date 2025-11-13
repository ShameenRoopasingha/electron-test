import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { BillCreateWithoutCustomerInputObjectSchema as BillCreateWithoutCustomerInputObjectSchema } from './BillCreateWithoutCustomerInput.schema';
import { BillUncheckedCreateWithoutCustomerInputObjectSchema as BillUncheckedCreateWithoutCustomerInputObjectSchema } from './BillUncheckedCreateWithoutCustomerInput.schema';
import { BillCreateOrConnectWithoutCustomerInputObjectSchema as BillCreateOrConnectWithoutCustomerInputObjectSchema } from './BillCreateOrConnectWithoutCustomerInput.schema';
import { BillCreateManyCustomerInputEnvelopeObjectSchema as BillCreateManyCustomerInputEnvelopeObjectSchema } from './BillCreateManyCustomerInputEnvelope.schema';
import { BillWhereUniqueInputObjectSchema as BillWhereUniqueInputObjectSchema } from './BillWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => BillCreateWithoutCustomerInputObjectSchema), z.lazy(() => BillCreateWithoutCustomerInputObjectSchema).array(), z.lazy(() => BillUncheckedCreateWithoutCustomerInputObjectSchema), z.lazy(() => BillUncheckedCreateWithoutCustomerInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => BillCreateOrConnectWithoutCustomerInputObjectSchema), z.lazy(() => BillCreateOrConnectWithoutCustomerInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => BillCreateManyCustomerInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => BillWhereUniqueInputObjectSchema), z.lazy(() => BillWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const BillCreateNestedManyWithoutCustomerInputObjectSchema: z.ZodType<Prisma.BillCreateNestedManyWithoutCustomerInput> = makeSchema() as unknown as z.ZodType<Prisma.BillCreateNestedManyWithoutCustomerInput>;
export const BillCreateNestedManyWithoutCustomerInputObjectZodSchema = makeSchema();
