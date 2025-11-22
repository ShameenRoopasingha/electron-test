import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RestockWhereUniqueInputObjectSchema as RestockWhereUniqueInputObjectSchema } from './RestockWhereUniqueInput.schema';
import { RestockUpdateWithoutUserInputObjectSchema as RestockUpdateWithoutUserInputObjectSchema } from './RestockUpdateWithoutUserInput.schema';
import { RestockUncheckedUpdateWithoutUserInputObjectSchema as RestockUncheckedUpdateWithoutUserInputObjectSchema } from './RestockUncheckedUpdateWithoutUserInput.schema';
import { RestockCreateWithoutUserInputObjectSchema as RestockCreateWithoutUserInputObjectSchema } from './RestockCreateWithoutUserInput.schema';
import { RestockUncheckedCreateWithoutUserInputObjectSchema as RestockUncheckedCreateWithoutUserInputObjectSchema } from './RestockUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RestockWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => RestockUpdateWithoutUserInputObjectSchema), z.lazy(() => RestockUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => RestockCreateWithoutUserInputObjectSchema), z.lazy(() => RestockUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const RestockUpsertWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.RestockUpsertWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.RestockUpsertWithWhereUniqueWithoutUserInput>;
export const RestockUpsertWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
