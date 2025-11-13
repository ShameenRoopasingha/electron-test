import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RestockWhereUniqueInputObjectSchema as RestockWhereUniqueInputObjectSchema } from './RestockWhereUniqueInput.schema';
import { RestockCreateWithoutItemsInputObjectSchema as RestockCreateWithoutItemsInputObjectSchema } from './RestockCreateWithoutItemsInput.schema';
import { RestockUncheckedCreateWithoutItemsInputObjectSchema as RestockUncheckedCreateWithoutItemsInputObjectSchema } from './RestockUncheckedCreateWithoutItemsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RestockWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => RestockCreateWithoutItemsInputObjectSchema), z.lazy(() => RestockUncheckedCreateWithoutItemsInputObjectSchema)])
}).strict();
export const RestockCreateOrConnectWithoutItemsInputObjectSchema: z.ZodType<Prisma.RestockCreateOrConnectWithoutItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.RestockCreateOrConnectWithoutItemsInput>;
export const RestockCreateOrConnectWithoutItemsInputObjectZodSchema = makeSchema();
