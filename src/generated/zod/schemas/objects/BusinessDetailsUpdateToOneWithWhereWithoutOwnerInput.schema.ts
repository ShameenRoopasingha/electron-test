import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { BusinessDetailsWhereInputObjectSchema as BusinessDetailsWhereInputObjectSchema } from './BusinessDetailsWhereInput.schema';
import { BusinessDetailsUpdateWithoutOwnerInputObjectSchema as BusinessDetailsUpdateWithoutOwnerInputObjectSchema } from './BusinessDetailsUpdateWithoutOwnerInput.schema';
import { BusinessDetailsUncheckedUpdateWithoutOwnerInputObjectSchema as BusinessDetailsUncheckedUpdateWithoutOwnerInputObjectSchema } from './BusinessDetailsUncheckedUpdateWithoutOwnerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BusinessDetailsWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => BusinessDetailsUpdateWithoutOwnerInputObjectSchema), z.lazy(() => BusinessDetailsUncheckedUpdateWithoutOwnerInputObjectSchema)])
}).strict();
export const BusinessDetailsUpdateToOneWithWhereWithoutOwnerInputObjectSchema: z.ZodType<Prisma.BusinessDetailsUpdateToOneWithWhereWithoutOwnerInput> = makeSchema() as unknown as z.ZodType<Prisma.BusinessDetailsUpdateToOneWithWhereWithoutOwnerInput>;
export const BusinessDetailsUpdateToOneWithWhereWithoutOwnerInputObjectZodSchema = makeSchema();
