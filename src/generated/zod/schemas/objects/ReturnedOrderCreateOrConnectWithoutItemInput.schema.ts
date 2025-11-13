import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ReturnedOrderWhereUniqueInputObjectSchema as ReturnedOrderWhereUniqueInputObjectSchema } from './ReturnedOrderWhereUniqueInput.schema';
import { ReturnedOrderCreateWithoutItemInputObjectSchema as ReturnedOrderCreateWithoutItemInputObjectSchema } from './ReturnedOrderCreateWithoutItemInput.schema';
import { ReturnedOrderUncheckedCreateWithoutItemInputObjectSchema as ReturnedOrderUncheckedCreateWithoutItemInputObjectSchema } from './ReturnedOrderUncheckedCreateWithoutItemInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReturnedOrderWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ReturnedOrderCreateWithoutItemInputObjectSchema), z.lazy(() => ReturnedOrderUncheckedCreateWithoutItemInputObjectSchema)])
}).strict();
export const ReturnedOrderCreateOrConnectWithoutItemInputObjectSchema: z.ZodType<Prisma.ReturnedOrderCreateOrConnectWithoutItemInput> = makeSchema() as unknown as z.ZodType<Prisma.ReturnedOrderCreateOrConnectWithoutItemInput>;
export const ReturnedOrderCreateOrConnectWithoutItemInputObjectZodSchema = makeSchema();
