import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { RestockItemSelectObjectSchema as RestockItemSelectObjectSchema } from './objects/RestockItemSelect.schema';
import { RestockItemIncludeObjectSchema as RestockItemIncludeObjectSchema } from './objects/RestockItemInclude.schema';
import { RestockItemCreateInputObjectSchema as RestockItemCreateInputObjectSchema } from './objects/RestockItemCreateInput.schema';
import { RestockItemUncheckedCreateInputObjectSchema as RestockItemUncheckedCreateInputObjectSchema } from './objects/RestockItemUncheckedCreateInput.schema';

export const RestockItemCreateOneSchema: z.ZodType<Prisma.RestockItemCreateArgs> = z.object({ select: RestockItemSelectObjectSchema.optional(), include: RestockItemIncludeObjectSchema.optional(), data: z.union([RestockItemCreateInputObjectSchema, RestockItemUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.RestockItemCreateArgs>;

export const RestockItemCreateOneZodSchema = z.object({ select: RestockItemSelectObjectSchema.optional(), include: RestockItemIncludeObjectSchema.optional(), data: z.union([RestockItemCreateInputObjectSchema, RestockItemUncheckedCreateInputObjectSchema]) }).strict();