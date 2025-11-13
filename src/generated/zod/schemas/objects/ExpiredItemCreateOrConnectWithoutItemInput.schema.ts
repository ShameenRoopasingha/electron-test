import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ExpiredItemWhereUniqueInputObjectSchema as ExpiredItemWhereUniqueInputObjectSchema } from './ExpiredItemWhereUniqueInput.schema';
import { ExpiredItemCreateWithoutItemInputObjectSchema as ExpiredItemCreateWithoutItemInputObjectSchema } from './ExpiredItemCreateWithoutItemInput.schema';
import { ExpiredItemUncheckedCreateWithoutItemInputObjectSchema as ExpiredItemUncheckedCreateWithoutItemInputObjectSchema } from './ExpiredItemUncheckedCreateWithoutItemInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ExpiredItemWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ExpiredItemCreateWithoutItemInputObjectSchema), z.lazy(() => ExpiredItemUncheckedCreateWithoutItemInputObjectSchema)])
}).strict();
export const ExpiredItemCreateOrConnectWithoutItemInputObjectSchema: z.ZodType<Prisma.ExpiredItemCreateOrConnectWithoutItemInput> = makeSchema() as unknown as z.ZodType<Prisma.ExpiredItemCreateOrConnectWithoutItemInput>;
export const ExpiredItemCreateOrConnectWithoutItemInputObjectZodSchema = makeSchema();
