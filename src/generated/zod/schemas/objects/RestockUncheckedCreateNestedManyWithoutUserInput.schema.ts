import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RestockCreateWithoutUserInputObjectSchema as RestockCreateWithoutUserInputObjectSchema } from './RestockCreateWithoutUserInput.schema';
import { RestockUncheckedCreateWithoutUserInputObjectSchema as RestockUncheckedCreateWithoutUserInputObjectSchema } from './RestockUncheckedCreateWithoutUserInput.schema';
import { RestockCreateOrConnectWithoutUserInputObjectSchema as RestockCreateOrConnectWithoutUserInputObjectSchema } from './RestockCreateOrConnectWithoutUserInput.schema';
import { RestockCreateManyUserInputEnvelopeObjectSchema as RestockCreateManyUserInputEnvelopeObjectSchema } from './RestockCreateManyUserInputEnvelope.schema';
import { RestockWhereUniqueInputObjectSchema as RestockWhereUniqueInputObjectSchema } from './RestockWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => RestockCreateWithoutUserInputObjectSchema), z.lazy(() => RestockCreateWithoutUserInputObjectSchema).array(), z.lazy(() => RestockUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => RestockUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => RestockCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => RestockCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => RestockCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => RestockWhereUniqueInputObjectSchema), z.lazy(() => RestockWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const RestockUncheckedCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.RestockUncheckedCreateNestedManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.RestockUncheckedCreateNestedManyWithoutUserInput>;
export const RestockUncheckedCreateNestedManyWithoutUserInputObjectZodSchema = makeSchema();
