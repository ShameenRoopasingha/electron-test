import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { BillWhereInputObjectSchema as BillWhereInputObjectSchema } from './BillWhereInput.schema';
import { BillUpdateWithoutCheckoutsInputObjectSchema as BillUpdateWithoutCheckoutsInputObjectSchema } from './BillUpdateWithoutCheckoutsInput.schema';
import { BillUncheckedUpdateWithoutCheckoutsInputObjectSchema as BillUncheckedUpdateWithoutCheckoutsInputObjectSchema } from './BillUncheckedUpdateWithoutCheckoutsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BillWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => BillUpdateWithoutCheckoutsInputObjectSchema), z.lazy(() => BillUncheckedUpdateWithoutCheckoutsInputObjectSchema)])
}).strict();
export const BillUpdateToOneWithWhereWithoutCheckoutsInputObjectSchema: z.ZodType<Prisma.BillUpdateToOneWithWhereWithoutCheckoutsInput> = makeSchema() as unknown as z.ZodType<Prisma.BillUpdateToOneWithWhereWithoutCheckoutsInput>;
export const BillUpdateToOneWithWhereWithoutCheckoutsInputObjectZodSchema = makeSchema();
