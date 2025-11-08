import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CustomerWhereUniqueInputObjectSchema as CustomerWhereUniqueInputObjectSchema } from './CustomerWhereUniqueInput.schema';
import { CustomerCreateWithoutBillsInputObjectSchema as CustomerCreateWithoutBillsInputObjectSchema } from './CustomerCreateWithoutBillsInput.schema';
import { CustomerUncheckedCreateWithoutBillsInputObjectSchema as CustomerUncheckedCreateWithoutBillsInputObjectSchema } from './CustomerUncheckedCreateWithoutBillsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CustomerWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CustomerCreateWithoutBillsInputObjectSchema), z.lazy(() => CustomerUncheckedCreateWithoutBillsInputObjectSchema)])
}).strict();
export const CustomerCreateOrConnectWithoutBillsInputObjectSchema: z.ZodType<Prisma.CustomerCreateOrConnectWithoutBillsInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerCreateOrConnectWithoutBillsInput>;
export const CustomerCreateOrConnectWithoutBillsInputObjectZodSchema = makeSchema();
