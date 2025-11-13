import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { BillCreateWithoutUserInputObjectSchema as BillCreateWithoutUserInputObjectSchema } from './BillCreateWithoutUserInput.schema';
import { BillUncheckedCreateWithoutUserInputObjectSchema as BillUncheckedCreateWithoutUserInputObjectSchema } from './BillUncheckedCreateWithoutUserInput.schema';
import { BillCreateOrConnectWithoutUserInputObjectSchema as BillCreateOrConnectWithoutUserInputObjectSchema } from './BillCreateOrConnectWithoutUserInput.schema';
import { BillCreateManyUserInputEnvelopeObjectSchema as BillCreateManyUserInputEnvelopeObjectSchema } from './BillCreateManyUserInputEnvelope.schema';
import { BillWhereUniqueInputObjectSchema as BillWhereUniqueInputObjectSchema } from './BillWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => BillCreateWithoutUserInputObjectSchema), z.lazy(() => BillCreateWithoutUserInputObjectSchema).array(), z.lazy(() => BillUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => BillUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => BillCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => BillCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => BillCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => BillWhereUniqueInputObjectSchema), z.lazy(() => BillWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const BillUncheckedCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.BillUncheckedCreateNestedManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.BillUncheckedCreateNestedManyWithoutUserInput>;
export const BillUncheckedCreateNestedManyWithoutUserInputObjectZodSchema = makeSchema();
