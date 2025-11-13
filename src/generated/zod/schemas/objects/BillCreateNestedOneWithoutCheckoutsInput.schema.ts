import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { BillCreateWithoutCheckoutsInputObjectSchema as BillCreateWithoutCheckoutsInputObjectSchema } from './BillCreateWithoutCheckoutsInput.schema';
import { BillUncheckedCreateWithoutCheckoutsInputObjectSchema as BillUncheckedCreateWithoutCheckoutsInputObjectSchema } from './BillUncheckedCreateWithoutCheckoutsInput.schema';
import { BillCreateOrConnectWithoutCheckoutsInputObjectSchema as BillCreateOrConnectWithoutCheckoutsInputObjectSchema } from './BillCreateOrConnectWithoutCheckoutsInput.schema';
import { BillWhereUniqueInputObjectSchema as BillWhereUniqueInputObjectSchema } from './BillWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => BillCreateWithoutCheckoutsInputObjectSchema), z.lazy(() => BillUncheckedCreateWithoutCheckoutsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => BillCreateOrConnectWithoutCheckoutsInputObjectSchema).optional(),
  connect: z.lazy(() => BillWhereUniqueInputObjectSchema).optional()
}).strict();
export const BillCreateNestedOneWithoutCheckoutsInputObjectSchema: z.ZodType<Prisma.BillCreateNestedOneWithoutCheckoutsInput> = makeSchema() as unknown as z.ZodType<Prisma.BillCreateNestedOneWithoutCheckoutsInput>;
export const BillCreateNestedOneWithoutCheckoutsInputObjectZodSchema = makeSchema();
