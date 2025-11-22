import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RestockWhereUniqueInputObjectSchema as RestockWhereUniqueInputObjectSchema } from './RestockWhereUniqueInput.schema';
import { RestockUpdateWithoutUserInputObjectSchema as RestockUpdateWithoutUserInputObjectSchema } from './RestockUpdateWithoutUserInput.schema';
import { RestockUncheckedUpdateWithoutUserInputObjectSchema as RestockUncheckedUpdateWithoutUserInputObjectSchema } from './RestockUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RestockWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => RestockUpdateWithoutUserInputObjectSchema), z.lazy(() => RestockUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const RestockUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.RestockUpdateWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.RestockUpdateWithWhereUniqueWithoutUserInput>;
export const RestockUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
