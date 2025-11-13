import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { BillWhereUniqueInputObjectSchema as BillWhereUniqueInputObjectSchema } from './BillWhereUniqueInput.schema';
import { BillUpdateWithoutUserInputObjectSchema as BillUpdateWithoutUserInputObjectSchema } from './BillUpdateWithoutUserInput.schema';
import { BillUncheckedUpdateWithoutUserInputObjectSchema as BillUncheckedUpdateWithoutUserInputObjectSchema } from './BillUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BillWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => BillUpdateWithoutUserInputObjectSchema), z.lazy(() => BillUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const BillUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.BillUpdateWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.BillUpdateWithWhereUniqueWithoutUserInput>;
export const BillUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
