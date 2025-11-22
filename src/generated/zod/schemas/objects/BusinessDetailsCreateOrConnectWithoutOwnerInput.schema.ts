import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { BusinessDetailsWhereUniqueInputObjectSchema as BusinessDetailsWhereUniqueInputObjectSchema } from './BusinessDetailsWhereUniqueInput.schema';
import { BusinessDetailsCreateWithoutOwnerInputObjectSchema as BusinessDetailsCreateWithoutOwnerInputObjectSchema } from './BusinessDetailsCreateWithoutOwnerInput.schema';
import { BusinessDetailsUncheckedCreateWithoutOwnerInputObjectSchema as BusinessDetailsUncheckedCreateWithoutOwnerInputObjectSchema } from './BusinessDetailsUncheckedCreateWithoutOwnerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BusinessDetailsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => BusinessDetailsCreateWithoutOwnerInputObjectSchema), z.lazy(() => BusinessDetailsUncheckedCreateWithoutOwnerInputObjectSchema)])
}).strict();
export const BusinessDetailsCreateOrConnectWithoutOwnerInputObjectSchema: z.ZodType<Prisma.BusinessDetailsCreateOrConnectWithoutOwnerInput> = makeSchema() as unknown as z.ZodType<Prisma.BusinessDetailsCreateOrConnectWithoutOwnerInput>;
export const BusinessDetailsCreateOrConnectWithoutOwnerInputObjectZodSchema = makeSchema();
