import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RestockWhereUniqueInputObjectSchema as RestockWhereUniqueInputObjectSchema } from './RestockWhereUniqueInput.schema';
import { RestockCreateWithoutUserInputObjectSchema as RestockCreateWithoutUserInputObjectSchema } from './RestockCreateWithoutUserInput.schema';
import { RestockUncheckedCreateWithoutUserInputObjectSchema as RestockUncheckedCreateWithoutUserInputObjectSchema } from './RestockUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RestockWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => RestockCreateWithoutUserInputObjectSchema), z.lazy(() => RestockUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const RestockCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.RestockCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.RestockCreateOrConnectWithoutUserInput>;
export const RestockCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
