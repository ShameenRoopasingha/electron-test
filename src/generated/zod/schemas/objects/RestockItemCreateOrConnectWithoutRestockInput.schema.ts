import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RestockItemWhereUniqueInputObjectSchema as RestockItemWhereUniqueInputObjectSchema } from './RestockItemWhereUniqueInput.schema';
import { RestockItemCreateWithoutRestockInputObjectSchema as RestockItemCreateWithoutRestockInputObjectSchema } from './RestockItemCreateWithoutRestockInput.schema';
import { RestockItemUncheckedCreateWithoutRestockInputObjectSchema as RestockItemUncheckedCreateWithoutRestockInputObjectSchema } from './RestockItemUncheckedCreateWithoutRestockInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RestockItemWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => RestockItemCreateWithoutRestockInputObjectSchema), z.lazy(() => RestockItemUncheckedCreateWithoutRestockInputObjectSchema)])
}).strict();
export const RestockItemCreateOrConnectWithoutRestockInputObjectSchema: z.ZodType<Prisma.RestockItemCreateOrConnectWithoutRestockInput> = makeSchema() as unknown as z.ZodType<Prisma.RestockItemCreateOrConnectWithoutRestockInput>;
export const RestockItemCreateOrConnectWithoutRestockInputObjectZodSchema = makeSchema();
