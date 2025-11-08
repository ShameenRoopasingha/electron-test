import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RestockItemWhereUniqueInputObjectSchema as RestockItemWhereUniqueInputObjectSchema } from './RestockItemWhereUniqueInput.schema';
import { RestockItemUpdateWithoutRestockInputObjectSchema as RestockItemUpdateWithoutRestockInputObjectSchema } from './RestockItemUpdateWithoutRestockInput.schema';
import { RestockItemUncheckedUpdateWithoutRestockInputObjectSchema as RestockItemUncheckedUpdateWithoutRestockInputObjectSchema } from './RestockItemUncheckedUpdateWithoutRestockInput.schema';
import { RestockItemCreateWithoutRestockInputObjectSchema as RestockItemCreateWithoutRestockInputObjectSchema } from './RestockItemCreateWithoutRestockInput.schema';
import { RestockItemUncheckedCreateWithoutRestockInputObjectSchema as RestockItemUncheckedCreateWithoutRestockInputObjectSchema } from './RestockItemUncheckedCreateWithoutRestockInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RestockItemWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => RestockItemUpdateWithoutRestockInputObjectSchema), z.lazy(() => RestockItemUncheckedUpdateWithoutRestockInputObjectSchema)]),
  create: z.union([z.lazy(() => RestockItemCreateWithoutRestockInputObjectSchema), z.lazy(() => RestockItemUncheckedCreateWithoutRestockInputObjectSchema)])
}).strict();
export const RestockItemUpsertWithWhereUniqueWithoutRestockInputObjectSchema: z.ZodType<Prisma.RestockItemUpsertWithWhereUniqueWithoutRestockInput> = makeSchema() as unknown as z.ZodType<Prisma.RestockItemUpsertWithWhereUniqueWithoutRestockInput>;
export const RestockItemUpsertWithWhereUniqueWithoutRestockInputObjectZodSchema = makeSchema();
