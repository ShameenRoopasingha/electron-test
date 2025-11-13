import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { BillCreateWithoutUserInputObjectSchema as BillCreateWithoutUserInputObjectSchema } from './BillCreateWithoutUserInput.schema';
import { BillUncheckedCreateWithoutUserInputObjectSchema as BillUncheckedCreateWithoutUserInputObjectSchema } from './BillUncheckedCreateWithoutUserInput.schema';
import { BillCreateOrConnectWithoutUserInputObjectSchema as BillCreateOrConnectWithoutUserInputObjectSchema } from './BillCreateOrConnectWithoutUserInput.schema';
import { BillUpsertWithWhereUniqueWithoutUserInputObjectSchema as BillUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './BillUpsertWithWhereUniqueWithoutUserInput.schema';
import { BillCreateManyUserInputEnvelopeObjectSchema as BillCreateManyUserInputEnvelopeObjectSchema } from './BillCreateManyUserInputEnvelope.schema';
import { BillWhereUniqueInputObjectSchema as BillWhereUniqueInputObjectSchema } from './BillWhereUniqueInput.schema';
import { BillUpdateWithWhereUniqueWithoutUserInputObjectSchema as BillUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './BillUpdateWithWhereUniqueWithoutUserInput.schema';
import { BillUpdateManyWithWhereWithoutUserInputObjectSchema as BillUpdateManyWithWhereWithoutUserInputObjectSchema } from './BillUpdateManyWithWhereWithoutUserInput.schema';
import { BillScalarWhereInputObjectSchema as BillScalarWhereInputObjectSchema } from './BillScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => BillCreateWithoutUserInputObjectSchema), z.lazy(() => BillCreateWithoutUserInputObjectSchema).array(), z.lazy(() => BillUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => BillUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => BillCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => BillCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => BillUpsertWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => BillUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => BillCreateManyUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => BillWhereUniqueInputObjectSchema), z.lazy(() => BillWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => BillWhereUniqueInputObjectSchema), z.lazy(() => BillWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => BillWhereUniqueInputObjectSchema), z.lazy(() => BillWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => BillWhereUniqueInputObjectSchema), z.lazy(() => BillWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => BillUpdateWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => BillUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => BillUpdateManyWithWhereWithoutUserInputObjectSchema), z.lazy(() => BillUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => BillScalarWhereInputObjectSchema), z.lazy(() => BillScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const BillUncheckedUpdateManyWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.BillUncheckedUpdateManyWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.BillUncheckedUpdateManyWithoutUserNestedInput>;
export const BillUncheckedUpdateManyWithoutUserNestedInputObjectZodSchema = makeSchema();
