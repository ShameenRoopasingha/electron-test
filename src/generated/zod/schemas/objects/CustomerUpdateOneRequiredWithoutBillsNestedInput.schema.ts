import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CustomerCreateWithoutBillsInputObjectSchema as CustomerCreateWithoutBillsInputObjectSchema } from './CustomerCreateWithoutBillsInput.schema';
import { CustomerUncheckedCreateWithoutBillsInputObjectSchema as CustomerUncheckedCreateWithoutBillsInputObjectSchema } from './CustomerUncheckedCreateWithoutBillsInput.schema';
import { CustomerCreateOrConnectWithoutBillsInputObjectSchema as CustomerCreateOrConnectWithoutBillsInputObjectSchema } from './CustomerCreateOrConnectWithoutBillsInput.schema';
import { CustomerUpsertWithoutBillsInputObjectSchema as CustomerUpsertWithoutBillsInputObjectSchema } from './CustomerUpsertWithoutBillsInput.schema';
import { CustomerWhereUniqueInputObjectSchema as CustomerWhereUniqueInputObjectSchema } from './CustomerWhereUniqueInput.schema';
import { CustomerUpdateToOneWithWhereWithoutBillsInputObjectSchema as CustomerUpdateToOneWithWhereWithoutBillsInputObjectSchema } from './CustomerUpdateToOneWithWhereWithoutBillsInput.schema';
import { CustomerUpdateWithoutBillsInputObjectSchema as CustomerUpdateWithoutBillsInputObjectSchema } from './CustomerUpdateWithoutBillsInput.schema';
import { CustomerUncheckedUpdateWithoutBillsInputObjectSchema as CustomerUncheckedUpdateWithoutBillsInputObjectSchema } from './CustomerUncheckedUpdateWithoutBillsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CustomerCreateWithoutBillsInputObjectSchema), z.lazy(() => CustomerUncheckedCreateWithoutBillsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CustomerCreateOrConnectWithoutBillsInputObjectSchema).optional(),
  upsert: z.lazy(() => CustomerUpsertWithoutBillsInputObjectSchema).optional(),
  connect: z.lazy(() => CustomerWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => CustomerUpdateToOneWithWhereWithoutBillsInputObjectSchema), z.lazy(() => CustomerUpdateWithoutBillsInputObjectSchema), z.lazy(() => CustomerUncheckedUpdateWithoutBillsInputObjectSchema)]).optional()
}).strict();
export const CustomerUpdateOneRequiredWithoutBillsNestedInputObjectSchema: z.ZodType<Prisma.CustomerUpdateOneRequiredWithoutBillsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerUpdateOneRequiredWithoutBillsNestedInput>;
export const CustomerUpdateOneRequiredWithoutBillsNestedInputObjectZodSchema = makeSchema();
