import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CustomerCreateWithoutBillsInputObjectSchema as CustomerCreateWithoutBillsInputObjectSchema } from './CustomerCreateWithoutBillsInput.schema';
import { CustomerUncheckedCreateWithoutBillsInputObjectSchema as CustomerUncheckedCreateWithoutBillsInputObjectSchema } from './CustomerUncheckedCreateWithoutBillsInput.schema';
import { CustomerCreateOrConnectWithoutBillsInputObjectSchema as CustomerCreateOrConnectWithoutBillsInputObjectSchema } from './CustomerCreateOrConnectWithoutBillsInput.schema';
import { CustomerWhereUniqueInputObjectSchema as CustomerWhereUniqueInputObjectSchema } from './CustomerWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CustomerCreateWithoutBillsInputObjectSchema), z.lazy(() => CustomerUncheckedCreateWithoutBillsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CustomerCreateOrConnectWithoutBillsInputObjectSchema).optional(),
  connect: z.lazy(() => CustomerWhereUniqueInputObjectSchema).optional()
}).strict();
export const CustomerCreateNestedOneWithoutBillsInputObjectSchema: z.ZodType<Prisma.CustomerCreateNestedOneWithoutBillsInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerCreateNestedOneWithoutBillsInput>;
export const CustomerCreateNestedOneWithoutBillsInputObjectZodSchema = makeSchema();
