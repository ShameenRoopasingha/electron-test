import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RestockUpdateWithoutItemsInputObjectSchema as RestockUpdateWithoutItemsInputObjectSchema } from './RestockUpdateWithoutItemsInput.schema';
import { RestockUncheckedUpdateWithoutItemsInputObjectSchema as RestockUncheckedUpdateWithoutItemsInputObjectSchema } from './RestockUncheckedUpdateWithoutItemsInput.schema';
import { RestockCreateWithoutItemsInputObjectSchema as RestockCreateWithoutItemsInputObjectSchema } from './RestockCreateWithoutItemsInput.schema';
import { RestockUncheckedCreateWithoutItemsInputObjectSchema as RestockUncheckedCreateWithoutItemsInputObjectSchema } from './RestockUncheckedCreateWithoutItemsInput.schema';
import { RestockWhereInputObjectSchema as RestockWhereInputObjectSchema } from './RestockWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => RestockUpdateWithoutItemsInputObjectSchema), z.lazy(() => RestockUncheckedUpdateWithoutItemsInputObjectSchema)]),
  create: z.union([z.lazy(() => RestockCreateWithoutItemsInputObjectSchema), z.lazy(() => RestockUncheckedCreateWithoutItemsInputObjectSchema)]),
  where: z.lazy(() => RestockWhereInputObjectSchema).optional()
}).strict();
export const RestockUpsertWithoutItemsInputObjectSchema: z.ZodType<Prisma.RestockUpsertWithoutItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.RestockUpsertWithoutItemsInput>;
export const RestockUpsertWithoutItemsInputObjectZodSchema = makeSchema();
