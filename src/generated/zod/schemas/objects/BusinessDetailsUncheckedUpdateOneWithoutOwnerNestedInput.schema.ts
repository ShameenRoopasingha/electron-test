import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { BusinessDetailsCreateWithoutOwnerInputObjectSchema as BusinessDetailsCreateWithoutOwnerInputObjectSchema } from './BusinessDetailsCreateWithoutOwnerInput.schema';
import { BusinessDetailsUncheckedCreateWithoutOwnerInputObjectSchema as BusinessDetailsUncheckedCreateWithoutOwnerInputObjectSchema } from './BusinessDetailsUncheckedCreateWithoutOwnerInput.schema';
import { BusinessDetailsCreateOrConnectWithoutOwnerInputObjectSchema as BusinessDetailsCreateOrConnectWithoutOwnerInputObjectSchema } from './BusinessDetailsCreateOrConnectWithoutOwnerInput.schema';
import { BusinessDetailsUpsertWithoutOwnerInputObjectSchema as BusinessDetailsUpsertWithoutOwnerInputObjectSchema } from './BusinessDetailsUpsertWithoutOwnerInput.schema';
import { BusinessDetailsWhereInputObjectSchema as BusinessDetailsWhereInputObjectSchema } from './BusinessDetailsWhereInput.schema';
import { BusinessDetailsWhereUniqueInputObjectSchema as BusinessDetailsWhereUniqueInputObjectSchema } from './BusinessDetailsWhereUniqueInput.schema';
import { BusinessDetailsUpdateToOneWithWhereWithoutOwnerInputObjectSchema as BusinessDetailsUpdateToOneWithWhereWithoutOwnerInputObjectSchema } from './BusinessDetailsUpdateToOneWithWhereWithoutOwnerInput.schema';
import { BusinessDetailsUpdateWithoutOwnerInputObjectSchema as BusinessDetailsUpdateWithoutOwnerInputObjectSchema } from './BusinessDetailsUpdateWithoutOwnerInput.schema';
import { BusinessDetailsUncheckedUpdateWithoutOwnerInputObjectSchema as BusinessDetailsUncheckedUpdateWithoutOwnerInputObjectSchema } from './BusinessDetailsUncheckedUpdateWithoutOwnerInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => BusinessDetailsCreateWithoutOwnerInputObjectSchema), z.lazy(() => BusinessDetailsUncheckedCreateWithoutOwnerInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => BusinessDetailsCreateOrConnectWithoutOwnerInputObjectSchema).optional(),
  upsert: z.lazy(() => BusinessDetailsUpsertWithoutOwnerInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => BusinessDetailsWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => BusinessDetailsWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => BusinessDetailsWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => BusinessDetailsUpdateToOneWithWhereWithoutOwnerInputObjectSchema), z.lazy(() => BusinessDetailsUpdateWithoutOwnerInputObjectSchema), z.lazy(() => BusinessDetailsUncheckedUpdateWithoutOwnerInputObjectSchema)]).optional()
}).strict();
export const BusinessDetailsUncheckedUpdateOneWithoutOwnerNestedInputObjectSchema: z.ZodType<Prisma.BusinessDetailsUncheckedUpdateOneWithoutOwnerNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.BusinessDetailsUncheckedUpdateOneWithoutOwnerNestedInput>;
export const BusinessDetailsUncheckedUpdateOneWithoutOwnerNestedInputObjectZodSchema = makeSchema();
