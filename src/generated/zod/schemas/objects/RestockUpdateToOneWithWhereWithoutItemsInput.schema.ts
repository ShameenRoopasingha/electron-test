import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RestockWhereInputObjectSchema as RestockWhereInputObjectSchema } from './RestockWhereInput.schema';
import { RestockUpdateWithoutItemsInputObjectSchema as RestockUpdateWithoutItemsInputObjectSchema } from './RestockUpdateWithoutItemsInput.schema';
import { RestockUncheckedUpdateWithoutItemsInputObjectSchema as RestockUncheckedUpdateWithoutItemsInputObjectSchema } from './RestockUncheckedUpdateWithoutItemsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RestockWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => RestockUpdateWithoutItemsInputObjectSchema), z.lazy(() => RestockUncheckedUpdateWithoutItemsInputObjectSchema)])
}).strict();
export const RestockUpdateToOneWithWhereWithoutItemsInputObjectSchema: z.ZodType<Prisma.RestockUpdateToOneWithWhereWithoutItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.RestockUpdateToOneWithWhereWithoutItemsInput>;
export const RestockUpdateToOneWithWhereWithoutItemsInputObjectZodSchema = makeSchema();
