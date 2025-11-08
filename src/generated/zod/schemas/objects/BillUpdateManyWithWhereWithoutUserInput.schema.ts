import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { BillScalarWhereInputObjectSchema as BillScalarWhereInputObjectSchema } from './BillScalarWhereInput.schema';
import { BillUpdateManyMutationInputObjectSchema as BillUpdateManyMutationInputObjectSchema } from './BillUpdateManyMutationInput.schema';
import { BillUncheckedUpdateManyWithoutUserInputObjectSchema as BillUncheckedUpdateManyWithoutUserInputObjectSchema } from './BillUncheckedUpdateManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BillScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => BillUpdateManyMutationInputObjectSchema), z.lazy(() => BillUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const BillUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.BillUpdateManyWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.BillUpdateManyWithWhereWithoutUserInput>;
export const BillUpdateManyWithWhereWithoutUserInputObjectZodSchema = makeSchema();
