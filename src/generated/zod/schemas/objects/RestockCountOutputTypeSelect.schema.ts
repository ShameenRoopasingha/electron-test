import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RestockCountOutputTypeCountItemsArgsObjectSchema as RestockCountOutputTypeCountItemsArgsObjectSchema } from './RestockCountOutputTypeCountItemsArgs.schema'

const makeSchema = () => z.object({
  items: z.union([z.boolean(), z.lazy(() => RestockCountOutputTypeCountItemsArgsObjectSchema)]).optional()
}).strict();
export const RestockCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.RestockCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.RestockCountOutputTypeSelect>;
export const RestockCountOutputTypeSelectObjectZodSchema = makeSchema();
