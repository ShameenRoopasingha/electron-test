import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { FloatFilterObjectSchema as FloatFilterObjectSchema } from './FloatFilter.schema';
import { RestockScalarRelationFilterObjectSchema as RestockScalarRelationFilterObjectSchema } from './RestockScalarRelationFilter.schema';
import { RestockWhereInputObjectSchema as RestockWhereInputObjectSchema } from './RestockWhereInput.schema';
import { ItemNullableScalarRelationFilterObjectSchema as ItemNullableScalarRelationFilterObjectSchema } from './ItemNullableScalarRelationFilter.schema';
import { ItemWhereInputObjectSchema as ItemWhereInputObjectSchema } from './ItemWhereInput.schema'

const restockitemwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => RestockItemWhereInputObjectSchema), z.lazy(() => RestockItemWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => RestockItemWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => RestockItemWhereInputObjectSchema), z.lazy(() => RestockItemWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  restockId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  itemId: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  quantity: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  costPrice: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  restock: z.union([z.lazy(() => RestockScalarRelationFilterObjectSchema), z.lazy(() => RestockWhereInputObjectSchema)]).optional(),
  item: z.union([z.lazy(() => ItemNullableScalarRelationFilterObjectSchema), z.lazy(() => ItemWhereInputObjectSchema)]).optional()
}).strict();
export const RestockItemWhereInputObjectSchema: z.ZodType<Prisma.RestockItemWhereInput> = restockitemwhereinputSchema as unknown as z.ZodType<Prisma.RestockItemWhereInput>;
export const RestockItemWhereInputObjectZodSchema = restockitemwhereinputSchema;
