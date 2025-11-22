import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { BusinessDetailsUpdateWithoutOwnerInputObjectSchema as BusinessDetailsUpdateWithoutOwnerInputObjectSchema } from './BusinessDetailsUpdateWithoutOwnerInput.schema';
import { BusinessDetailsUncheckedUpdateWithoutOwnerInputObjectSchema as BusinessDetailsUncheckedUpdateWithoutOwnerInputObjectSchema } from './BusinessDetailsUncheckedUpdateWithoutOwnerInput.schema';
import { BusinessDetailsCreateWithoutOwnerInputObjectSchema as BusinessDetailsCreateWithoutOwnerInputObjectSchema } from './BusinessDetailsCreateWithoutOwnerInput.schema';
import { BusinessDetailsUncheckedCreateWithoutOwnerInputObjectSchema as BusinessDetailsUncheckedCreateWithoutOwnerInputObjectSchema } from './BusinessDetailsUncheckedCreateWithoutOwnerInput.schema';
import { BusinessDetailsWhereInputObjectSchema as BusinessDetailsWhereInputObjectSchema } from './BusinessDetailsWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => BusinessDetailsUpdateWithoutOwnerInputObjectSchema), z.lazy(() => BusinessDetailsUncheckedUpdateWithoutOwnerInputObjectSchema)]),
  create: z.union([z.lazy(() => BusinessDetailsCreateWithoutOwnerInputObjectSchema), z.lazy(() => BusinessDetailsUncheckedCreateWithoutOwnerInputObjectSchema)]),
  where: z.lazy(() => BusinessDetailsWhereInputObjectSchema).optional()
}).strict();
export const BusinessDetailsUpsertWithoutOwnerInputObjectSchema: z.ZodType<Prisma.BusinessDetailsUpsertWithoutOwnerInput> = makeSchema() as unknown as z.ZodType<Prisma.BusinessDetailsUpsertWithoutOwnerInput>;
export const BusinessDetailsUpsertWithoutOwnerInputObjectZodSchema = makeSchema();
