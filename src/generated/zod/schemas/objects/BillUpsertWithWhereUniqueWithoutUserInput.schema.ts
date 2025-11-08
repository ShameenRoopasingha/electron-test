import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { BillWhereUniqueInputObjectSchema as BillWhereUniqueInputObjectSchema } from './BillWhereUniqueInput.schema';
import { BillUpdateWithoutUserInputObjectSchema as BillUpdateWithoutUserInputObjectSchema } from './BillUpdateWithoutUserInput.schema';
import { BillUncheckedUpdateWithoutUserInputObjectSchema as BillUncheckedUpdateWithoutUserInputObjectSchema } from './BillUncheckedUpdateWithoutUserInput.schema';
import { BillCreateWithoutUserInputObjectSchema as BillCreateWithoutUserInputObjectSchema } from './BillCreateWithoutUserInput.schema';
import { BillUncheckedCreateWithoutUserInputObjectSchema as BillUncheckedCreateWithoutUserInputObjectSchema } from './BillUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BillWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => BillUpdateWithoutUserInputObjectSchema), z.lazy(() => BillUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => BillCreateWithoutUserInputObjectSchema), z.lazy(() => BillUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const BillUpsertWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.BillUpsertWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.BillUpsertWithWhereUniqueWithoutUserInput>;
export const BillUpsertWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
