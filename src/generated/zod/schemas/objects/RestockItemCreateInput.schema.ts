import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RestockCreateNestedOneWithoutItemsInputObjectSchema as RestockCreateNestedOneWithoutItemsInputObjectSchema } from './RestockCreateNestedOneWithoutItemsInput.schema';
import { ItemCreateNestedOneWithoutRestockItemsInputObjectSchema as ItemCreateNestedOneWithoutRestockItemsInputObjectSchema } from './ItemCreateNestedOneWithoutRestockItemsInput.schema'

const makeSchema = () => z.object({
  quantity: z.number().int(),
  costPrice: z.number(),
  restock: z.lazy(() => RestockCreateNestedOneWithoutItemsInputObjectSchema),
  item: z.lazy(() => ItemCreateNestedOneWithoutRestockItemsInputObjectSchema).optional()
}).strict();
export const RestockItemCreateInputObjectSchema: z.ZodType<Prisma.RestockItemCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.RestockItemCreateInput>;
export const RestockItemCreateInputObjectZodSchema = makeSchema();
