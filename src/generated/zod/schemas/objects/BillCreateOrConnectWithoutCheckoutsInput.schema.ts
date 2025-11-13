import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { BillWhereUniqueInputObjectSchema as BillWhereUniqueInputObjectSchema } from './BillWhereUniqueInput.schema';
import { BillCreateWithoutCheckoutsInputObjectSchema as BillCreateWithoutCheckoutsInputObjectSchema } from './BillCreateWithoutCheckoutsInput.schema';
import { BillUncheckedCreateWithoutCheckoutsInputObjectSchema as BillUncheckedCreateWithoutCheckoutsInputObjectSchema } from './BillUncheckedCreateWithoutCheckoutsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BillWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => BillCreateWithoutCheckoutsInputObjectSchema), z.lazy(() => BillUncheckedCreateWithoutCheckoutsInputObjectSchema)])
}).strict();
export const BillCreateOrConnectWithoutCheckoutsInputObjectSchema: z.ZodType<Prisma.BillCreateOrConnectWithoutCheckoutsInput> = makeSchema() as unknown as z.ZodType<Prisma.BillCreateOrConnectWithoutCheckoutsInput>;
export const BillCreateOrConnectWithoutCheckoutsInputObjectZodSchema = makeSchema();
