import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RestockItemWhereUniqueInputObjectSchema as RestockItemWhereUniqueInputObjectSchema } from './RestockItemWhereUniqueInput.schema';
import { RestockItemUpdateWithoutRestockInputObjectSchema as RestockItemUpdateWithoutRestockInputObjectSchema } from './RestockItemUpdateWithoutRestockInput.schema';
import { RestockItemUncheckedUpdateWithoutRestockInputObjectSchema as RestockItemUncheckedUpdateWithoutRestockInputObjectSchema } from './RestockItemUncheckedUpdateWithoutRestockInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RestockItemWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => RestockItemUpdateWithoutRestockInputObjectSchema), z.lazy(() => RestockItemUncheckedUpdateWithoutRestockInputObjectSchema)])
}).strict();
export const RestockItemUpdateWithWhereUniqueWithoutRestockInputObjectSchema: z.ZodType<Prisma.RestockItemUpdateWithWhereUniqueWithoutRestockInput> = makeSchema() as unknown as z.ZodType<Prisma.RestockItemUpdateWithWhereUniqueWithoutRestockInput>;
export const RestockItemUpdateWithWhereUniqueWithoutRestockInputObjectZodSchema = makeSchema();
