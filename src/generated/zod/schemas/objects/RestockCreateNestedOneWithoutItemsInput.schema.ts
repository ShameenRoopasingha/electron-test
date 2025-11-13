import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RestockCreateWithoutItemsInputObjectSchema as RestockCreateWithoutItemsInputObjectSchema } from './RestockCreateWithoutItemsInput.schema';
import { RestockUncheckedCreateWithoutItemsInputObjectSchema as RestockUncheckedCreateWithoutItemsInputObjectSchema } from './RestockUncheckedCreateWithoutItemsInput.schema';
import { RestockCreateOrConnectWithoutItemsInputObjectSchema as RestockCreateOrConnectWithoutItemsInputObjectSchema } from './RestockCreateOrConnectWithoutItemsInput.schema';
import { RestockWhereUniqueInputObjectSchema as RestockWhereUniqueInputObjectSchema } from './RestockWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => RestockCreateWithoutItemsInputObjectSchema), z.lazy(() => RestockUncheckedCreateWithoutItemsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => RestockCreateOrConnectWithoutItemsInputObjectSchema).optional(),
  connect: z.lazy(() => RestockWhereUniqueInputObjectSchema).optional()
}).strict();
export const RestockCreateNestedOneWithoutItemsInputObjectSchema: z.ZodType<Prisma.RestockCreateNestedOneWithoutItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.RestockCreateNestedOneWithoutItemsInput>;
export const RestockCreateNestedOneWithoutItemsInputObjectZodSchema = makeSchema();
