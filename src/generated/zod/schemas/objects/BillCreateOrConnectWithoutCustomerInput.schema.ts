import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { BillWhereUniqueInputObjectSchema as BillWhereUniqueInputObjectSchema } from './BillWhereUniqueInput.schema';
import { BillCreateWithoutCustomerInputObjectSchema as BillCreateWithoutCustomerInputObjectSchema } from './BillCreateWithoutCustomerInput.schema';
import { BillUncheckedCreateWithoutCustomerInputObjectSchema as BillUncheckedCreateWithoutCustomerInputObjectSchema } from './BillUncheckedCreateWithoutCustomerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BillWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => BillCreateWithoutCustomerInputObjectSchema), z.lazy(() => BillUncheckedCreateWithoutCustomerInputObjectSchema)])
}).strict();
export const BillCreateOrConnectWithoutCustomerInputObjectSchema: z.ZodType<Prisma.BillCreateOrConnectWithoutCustomerInput> = makeSchema() as unknown as z.ZodType<Prisma.BillCreateOrConnectWithoutCustomerInput>;
export const BillCreateOrConnectWithoutCustomerInputObjectZodSchema = makeSchema();
