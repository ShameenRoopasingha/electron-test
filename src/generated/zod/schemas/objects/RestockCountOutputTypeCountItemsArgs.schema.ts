import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RestockItemWhereInputObjectSchema as RestockItemWhereInputObjectSchema } from './RestockItemWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RestockItemWhereInputObjectSchema).optional()
}).strict();
export const RestockCountOutputTypeCountItemsArgsObjectSchema = makeSchema();
export const RestockCountOutputTypeCountItemsArgsObjectZodSchema = makeSchema();
