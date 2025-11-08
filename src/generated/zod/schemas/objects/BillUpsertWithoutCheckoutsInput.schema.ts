import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { BillUpdateWithoutCheckoutsInputObjectSchema as BillUpdateWithoutCheckoutsInputObjectSchema } from './BillUpdateWithoutCheckoutsInput.schema';
import { BillUncheckedUpdateWithoutCheckoutsInputObjectSchema as BillUncheckedUpdateWithoutCheckoutsInputObjectSchema } from './BillUncheckedUpdateWithoutCheckoutsInput.schema';
import { BillCreateWithoutCheckoutsInputObjectSchema as BillCreateWithoutCheckoutsInputObjectSchema } from './BillCreateWithoutCheckoutsInput.schema';
import { BillUncheckedCreateWithoutCheckoutsInputObjectSchema as BillUncheckedCreateWithoutCheckoutsInputObjectSchema } from './BillUncheckedCreateWithoutCheckoutsInput.schema';
import { BillWhereInputObjectSchema as BillWhereInputObjectSchema } from './BillWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => BillUpdateWithoutCheckoutsInputObjectSchema), z.lazy(() => BillUncheckedUpdateWithoutCheckoutsInputObjectSchema)]),
  create: z.union([z.lazy(() => BillCreateWithoutCheckoutsInputObjectSchema), z.lazy(() => BillUncheckedCreateWithoutCheckoutsInputObjectSchema)]),
  where: z.lazy(() => BillWhereInputObjectSchema).optional()
}).strict();
export const BillUpsertWithoutCheckoutsInputObjectSchema: z.ZodType<Prisma.BillUpsertWithoutCheckoutsInput> = makeSchema() as unknown as z.ZodType<Prisma.BillUpsertWithoutCheckoutsInput>;
export const BillUpsertWithoutCheckoutsInputObjectZodSchema = makeSchema();
