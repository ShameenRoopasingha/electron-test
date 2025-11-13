import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ItemCreateManyCategoryInputObjectSchema as ItemCreateManyCategoryInputObjectSchema } from './ItemCreateManyCategoryInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ItemCreateManyCategoryInputObjectSchema), z.lazy(() => ItemCreateManyCategoryInputObjectSchema).array()])
}).strict();
export const ItemCreateManyCategoryInputEnvelopeObjectSchema: z.ZodType<Prisma.ItemCreateManyCategoryInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ItemCreateManyCategoryInputEnvelope>;
export const ItemCreateManyCategoryInputEnvelopeObjectZodSchema = makeSchema();
