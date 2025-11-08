import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { BillCreateWithoutCheckoutsInputObjectSchema as BillCreateWithoutCheckoutsInputObjectSchema } from './BillCreateWithoutCheckoutsInput.schema';
import { BillUncheckedCreateWithoutCheckoutsInputObjectSchema as BillUncheckedCreateWithoutCheckoutsInputObjectSchema } from './BillUncheckedCreateWithoutCheckoutsInput.schema';
import { BillCreateOrConnectWithoutCheckoutsInputObjectSchema as BillCreateOrConnectWithoutCheckoutsInputObjectSchema } from './BillCreateOrConnectWithoutCheckoutsInput.schema';
import { BillUpsertWithoutCheckoutsInputObjectSchema as BillUpsertWithoutCheckoutsInputObjectSchema } from './BillUpsertWithoutCheckoutsInput.schema';
import { BillWhereUniqueInputObjectSchema as BillWhereUniqueInputObjectSchema } from './BillWhereUniqueInput.schema';
import { BillUpdateToOneWithWhereWithoutCheckoutsInputObjectSchema as BillUpdateToOneWithWhereWithoutCheckoutsInputObjectSchema } from './BillUpdateToOneWithWhereWithoutCheckoutsInput.schema';
import { BillUpdateWithoutCheckoutsInputObjectSchema as BillUpdateWithoutCheckoutsInputObjectSchema } from './BillUpdateWithoutCheckoutsInput.schema';
import { BillUncheckedUpdateWithoutCheckoutsInputObjectSchema as BillUncheckedUpdateWithoutCheckoutsInputObjectSchema } from './BillUncheckedUpdateWithoutCheckoutsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => BillCreateWithoutCheckoutsInputObjectSchema), z.lazy(() => BillUncheckedCreateWithoutCheckoutsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => BillCreateOrConnectWithoutCheckoutsInputObjectSchema).optional(),
  upsert: z.lazy(() => BillUpsertWithoutCheckoutsInputObjectSchema).optional(),
  connect: z.lazy(() => BillWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => BillUpdateToOneWithWhereWithoutCheckoutsInputObjectSchema), z.lazy(() => BillUpdateWithoutCheckoutsInputObjectSchema), z.lazy(() => BillUncheckedUpdateWithoutCheckoutsInputObjectSchema)]).optional()
}).strict();
export const BillUpdateOneRequiredWithoutCheckoutsNestedInputObjectSchema: z.ZodType<Prisma.BillUpdateOneRequiredWithoutCheckoutsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.BillUpdateOneRequiredWithoutCheckoutsNestedInput>;
export const BillUpdateOneRequiredWithoutCheckoutsNestedInputObjectZodSchema = makeSchema();
