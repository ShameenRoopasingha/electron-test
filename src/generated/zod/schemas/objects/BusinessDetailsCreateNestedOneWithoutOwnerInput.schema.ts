import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { BusinessDetailsCreateWithoutOwnerInputObjectSchema as BusinessDetailsCreateWithoutOwnerInputObjectSchema } from './BusinessDetailsCreateWithoutOwnerInput.schema';
import { BusinessDetailsUncheckedCreateWithoutOwnerInputObjectSchema as BusinessDetailsUncheckedCreateWithoutOwnerInputObjectSchema } from './BusinessDetailsUncheckedCreateWithoutOwnerInput.schema';
import { BusinessDetailsCreateOrConnectWithoutOwnerInputObjectSchema as BusinessDetailsCreateOrConnectWithoutOwnerInputObjectSchema } from './BusinessDetailsCreateOrConnectWithoutOwnerInput.schema';
import { BusinessDetailsWhereUniqueInputObjectSchema as BusinessDetailsWhereUniqueInputObjectSchema } from './BusinessDetailsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => BusinessDetailsCreateWithoutOwnerInputObjectSchema), z.lazy(() => BusinessDetailsUncheckedCreateWithoutOwnerInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => BusinessDetailsCreateOrConnectWithoutOwnerInputObjectSchema).optional(),
  connect: z.lazy(() => BusinessDetailsWhereUniqueInputObjectSchema).optional()
}).strict();
export const BusinessDetailsCreateNestedOneWithoutOwnerInputObjectSchema: z.ZodType<Prisma.BusinessDetailsCreateNestedOneWithoutOwnerInput> = makeSchema() as unknown as z.ZodType<Prisma.BusinessDetailsCreateNestedOneWithoutOwnerInput>;
export const BusinessDetailsCreateNestedOneWithoutOwnerInputObjectZodSchema = makeSchema();
