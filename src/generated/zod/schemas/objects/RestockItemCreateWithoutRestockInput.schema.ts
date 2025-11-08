import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ItemCreateNestedOneWithoutRestockItemsInputObjectSchema as ItemCreateNestedOneWithoutRestockItemsInputObjectSchema } from './ItemCreateNestedOneWithoutRestockItemsInput.schema'

const makeSchema = () => z.object({
  quantity: z.number().int(),
  costPrice: z.number(),
  item: z.lazy(() => ItemCreateNestedOneWithoutRestockItemsInputObjectSchema).optional()
}).strict();
export const RestockItemCreateWithoutRestockInputObjectSchema: z.ZodType<Prisma.RestockItemCreateWithoutRestockInput> = makeSchema() as unknown as z.ZodType<Prisma.RestockItemCreateWithoutRestockInput>;
export const RestockItemCreateWithoutRestockInputObjectZodSchema = makeSchema();
