import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ExpiredItemWhereUniqueInputObjectSchema as ExpiredItemWhereUniqueInputObjectSchema } from './ExpiredItemWhereUniqueInput.schema';
import { ExpiredItemCreateWithoutUserInputObjectSchema as ExpiredItemCreateWithoutUserInputObjectSchema } from './ExpiredItemCreateWithoutUserInput.schema';
import { ExpiredItemUncheckedCreateWithoutUserInputObjectSchema as ExpiredItemUncheckedCreateWithoutUserInputObjectSchema } from './ExpiredItemUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ExpiredItemWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ExpiredItemCreateWithoutUserInputObjectSchema), z.lazy(() => ExpiredItemUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const ExpiredItemCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.ExpiredItemCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ExpiredItemCreateOrConnectWithoutUserInput>;
export const ExpiredItemCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
