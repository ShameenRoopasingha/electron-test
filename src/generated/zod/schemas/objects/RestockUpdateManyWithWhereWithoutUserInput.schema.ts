import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RestockScalarWhereInputObjectSchema as RestockScalarWhereInputObjectSchema } from './RestockScalarWhereInput.schema';
import { RestockUpdateManyMutationInputObjectSchema as RestockUpdateManyMutationInputObjectSchema } from './RestockUpdateManyMutationInput.schema';
import { RestockUncheckedUpdateManyWithoutUserInputObjectSchema as RestockUncheckedUpdateManyWithoutUserInputObjectSchema } from './RestockUncheckedUpdateManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RestockScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => RestockUpdateManyMutationInputObjectSchema), z.lazy(() => RestockUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const RestockUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.RestockUpdateManyWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.RestockUpdateManyWithWhereWithoutUserInput>;
export const RestockUpdateManyWithWhereWithoutUserInputObjectZodSchema = makeSchema();
