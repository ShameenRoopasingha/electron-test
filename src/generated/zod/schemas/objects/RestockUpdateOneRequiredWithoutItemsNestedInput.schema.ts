import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RestockCreateWithoutItemsInputObjectSchema as RestockCreateWithoutItemsInputObjectSchema } from './RestockCreateWithoutItemsInput.schema';
import { RestockUncheckedCreateWithoutItemsInputObjectSchema as RestockUncheckedCreateWithoutItemsInputObjectSchema } from './RestockUncheckedCreateWithoutItemsInput.schema';
import { RestockCreateOrConnectWithoutItemsInputObjectSchema as RestockCreateOrConnectWithoutItemsInputObjectSchema } from './RestockCreateOrConnectWithoutItemsInput.schema';
import { RestockUpsertWithoutItemsInputObjectSchema as RestockUpsertWithoutItemsInputObjectSchema } from './RestockUpsertWithoutItemsInput.schema';
import { RestockWhereUniqueInputObjectSchema as RestockWhereUniqueInputObjectSchema } from './RestockWhereUniqueInput.schema';
import { RestockUpdateToOneWithWhereWithoutItemsInputObjectSchema as RestockUpdateToOneWithWhereWithoutItemsInputObjectSchema } from './RestockUpdateToOneWithWhereWithoutItemsInput.schema';
import { RestockUpdateWithoutItemsInputObjectSchema as RestockUpdateWithoutItemsInputObjectSchema } from './RestockUpdateWithoutItemsInput.schema';
import { RestockUncheckedUpdateWithoutItemsInputObjectSchema as RestockUncheckedUpdateWithoutItemsInputObjectSchema } from './RestockUncheckedUpdateWithoutItemsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => RestockCreateWithoutItemsInputObjectSchema), z.lazy(() => RestockUncheckedCreateWithoutItemsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => RestockCreateOrConnectWithoutItemsInputObjectSchema).optional(),
  upsert: z.lazy(() => RestockUpsertWithoutItemsInputObjectSchema).optional(),
  connect: z.lazy(() => RestockWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => RestockUpdateToOneWithWhereWithoutItemsInputObjectSchema), z.lazy(() => RestockUpdateWithoutItemsInputObjectSchema), z.lazy(() => RestockUncheckedUpdateWithoutItemsInputObjectSchema)]).optional()
}).strict();
export const RestockUpdateOneRequiredWithoutItemsNestedInputObjectSchema: z.ZodType<Prisma.RestockUpdateOneRequiredWithoutItemsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.RestockUpdateOneRequiredWithoutItemsNestedInput>;
export const RestockUpdateOneRequiredWithoutItemsNestedInputObjectZodSchema = makeSchema();
