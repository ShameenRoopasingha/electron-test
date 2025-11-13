import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RestockItemWhereUniqueInputObjectSchema as RestockItemWhereUniqueInputObjectSchema } from './RestockItemWhereUniqueInput.schema';
import { RestockItemCreateWithoutItemInputObjectSchema as RestockItemCreateWithoutItemInputObjectSchema } from './RestockItemCreateWithoutItemInput.schema';
import { RestockItemUncheckedCreateWithoutItemInputObjectSchema as RestockItemUncheckedCreateWithoutItemInputObjectSchema } from './RestockItemUncheckedCreateWithoutItemInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RestockItemWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => RestockItemCreateWithoutItemInputObjectSchema), z.lazy(() => RestockItemUncheckedCreateWithoutItemInputObjectSchema)])
}).strict();
export const RestockItemCreateOrConnectWithoutItemInputObjectSchema: z.ZodType<Prisma.RestockItemCreateOrConnectWithoutItemInput> = makeSchema() as unknown as z.ZodType<Prisma.RestockItemCreateOrConnectWithoutItemInput>;
export const RestockItemCreateOrConnectWithoutItemInputObjectZodSchema = makeSchema();
