import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RestockItemCreateWithoutRestockInputObjectSchema as RestockItemCreateWithoutRestockInputObjectSchema } from './RestockItemCreateWithoutRestockInput.schema';
import { RestockItemUncheckedCreateWithoutRestockInputObjectSchema as RestockItemUncheckedCreateWithoutRestockInputObjectSchema } from './RestockItemUncheckedCreateWithoutRestockInput.schema';
import { RestockItemCreateOrConnectWithoutRestockInputObjectSchema as RestockItemCreateOrConnectWithoutRestockInputObjectSchema } from './RestockItemCreateOrConnectWithoutRestockInput.schema';
import { RestockItemCreateManyRestockInputEnvelopeObjectSchema as RestockItemCreateManyRestockInputEnvelopeObjectSchema } from './RestockItemCreateManyRestockInputEnvelope.schema';
import { RestockItemWhereUniqueInputObjectSchema as RestockItemWhereUniqueInputObjectSchema } from './RestockItemWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => RestockItemCreateWithoutRestockInputObjectSchema), z.lazy(() => RestockItemCreateWithoutRestockInputObjectSchema).array(), z.lazy(() => RestockItemUncheckedCreateWithoutRestockInputObjectSchema), z.lazy(() => RestockItemUncheckedCreateWithoutRestockInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => RestockItemCreateOrConnectWithoutRestockInputObjectSchema), z.lazy(() => RestockItemCreateOrConnectWithoutRestockInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => RestockItemCreateManyRestockInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => RestockItemWhereUniqueInputObjectSchema), z.lazy(() => RestockItemWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const RestockItemUncheckedCreateNestedManyWithoutRestockInputObjectSchema: z.ZodType<Prisma.RestockItemUncheckedCreateNestedManyWithoutRestockInput> = makeSchema() as unknown as z.ZodType<Prisma.RestockItemUncheckedCreateNestedManyWithoutRestockInput>;
export const RestockItemUncheckedCreateNestedManyWithoutRestockInputObjectZodSchema = makeSchema();
