import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RestockCreateNestedOneWithoutItemsInputObjectSchema as RestockCreateNestedOneWithoutItemsInputObjectSchema } from './RestockCreateNestedOneWithoutItemsInput.schema'

const makeSchema = () => z.object({
  quantity: z.number().int(),
  costPrice: z.number(),
  restock: z.lazy(() => RestockCreateNestedOneWithoutItemsInputObjectSchema)
}).strict();
export const RestockItemCreateWithoutItemInputObjectSchema: z.ZodType<Prisma.RestockItemCreateWithoutItemInput> = makeSchema() as unknown as z.ZodType<Prisma.RestockItemCreateWithoutItemInput>;
export const RestockItemCreateWithoutItemInputObjectZodSchema = makeSchema();
