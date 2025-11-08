import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { BillWhereUniqueInputObjectSchema as BillWhereUniqueInputObjectSchema } from './BillWhereUniqueInput.schema';
import { BillCreateWithoutUserInputObjectSchema as BillCreateWithoutUserInputObjectSchema } from './BillCreateWithoutUserInput.schema';
import { BillUncheckedCreateWithoutUserInputObjectSchema as BillUncheckedCreateWithoutUserInputObjectSchema } from './BillUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BillWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => BillCreateWithoutUserInputObjectSchema), z.lazy(() => BillUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const BillCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.BillCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.BillCreateOrConnectWithoutUserInput>;
export const BillCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
