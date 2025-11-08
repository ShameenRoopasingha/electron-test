import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { RestockSelectObjectSchema as RestockSelectObjectSchema } from './objects/RestockSelect.schema';
import { RestockIncludeObjectSchema as RestockIncludeObjectSchema } from './objects/RestockInclude.schema';
import { RestockCreateInputObjectSchema as RestockCreateInputObjectSchema } from './objects/RestockCreateInput.schema';
import { RestockUncheckedCreateInputObjectSchema as RestockUncheckedCreateInputObjectSchema } from './objects/RestockUncheckedCreateInput.schema';

export const RestockCreateOneSchema: z.ZodType<Prisma.RestockCreateArgs> = z.object({ select: RestockSelectObjectSchema.optional(), include: RestockIncludeObjectSchema.optional(), data: z.union([RestockCreateInputObjectSchema, RestockUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.RestockCreateArgs>;

export const RestockCreateOneZodSchema = z.object({ select: RestockSelectObjectSchema.optional(), include: RestockIncludeObjectSchema.optional(), data: z.union([RestockCreateInputObjectSchema, RestockUncheckedCreateInputObjectSchema]) }).strict();