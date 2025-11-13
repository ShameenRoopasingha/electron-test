import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { BillCreateWithoutReturnedOrdersInputObjectSchema as BillCreateWithoutReturnedOrdersInputObjectSchema } from './BillCreateWithoutReturnedOrdersInput.schema';
import { BillUncheckedCreateWithoutReturnedOrdersInputObjectSchema as BillUncheckedCreateWithoutReturnedOrdersInputObjectSchema } from './BillUncheckedCreateWithoutReturnedOrdersInput.schema';
import { BillCreateOrConnectWithoutReturnedOrdersInputObjectSchema as BillCreateOrConnectWithoutReturnedOrdersInputObjectSchema } from './BillCreateOrConnectWithoutReturnedOrdersInput.schema';
import { BillUpsertWithoutReturnedOrdersInputObjectSchema as BillUpsertWithoutReturnedOrdersInputObjectSchema } from './BillUpsertWithoutReturnedOrdersInput.schema';
import { BillWhereInputObjectSchema as BillWhereInputObjectSchema } from './BillWhereInput.schema';
import { BillWhereUniqueInputObjectSchema as BillWhereUniqueInputObjectSchema } from './BillWhereUniqueInput.schema';
import { BillUpdateToOneWithWhereWithoutReturnedOrdersInputObjectSchema as BillUpdateToOneWithWhereWithoutReturnedOrdersInputObjectSchema } from './BillUpdateToOneWithWhereWithoutReturnedOrdersInput.schema';
import { BillUpdateWithoutReturnedOrdersInputObjectSchema as BillUpdateWithoutReturnedOrdersInputObjectSchema } from './BillUpdateWithoutReturnedOrdersInput.schema';
import { BillUncheckedUpdateWithoutReturnedOrdersInputObjectSchema as BillUncheckedUpdateWithoutReturnedOrdersInputObjectSchema } from './BillUncheckedUpdateWithoutReturnedOrdersInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => BillCreateWithoutReturnedOrdersInputObjectSchema), z.lazy(() => BillUncheckedCreateWithoutReturnedOrdersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => BillCreateOrConnectWithoutReturnedOrdersInputObjectSchema).optional(),
  upsert: z.lazy(() => BillUpsertWithoutReturnedOrdersInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => BillWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => BillWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => BillWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => BillUpdateToOneWithWhereWithoutReturnedOrdersInputObjectSchema), z.lazy(() => BillUpdateWithoutReturnedOrdersInputObjectSchema), z.lazy(() => BillUncheckedUpdateWithoutReturnedOrdersInputObjectSchema)]).optional()
}).strict();
export const BillUpdateOneWithoutReturnedOrdersNestedInputObjectSchema: z.ZodType<Prisma.BillUpdateOneWithoutReturnedOrdersNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.BillUpdateOneWithoutReturnedOrdersNestedInput>;
export const BillUpdateOneWithoutReturnedOrdersNestedInputObjectZodSchema = makeSchema();
