import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { ExpiredItemSelectObjectSchema as ExpiredItemSelectObjectSchema } from './objects/ExpiredItemSelect.schema';
import { ExpiredItemIncludeObjectSchema as ExpiredItemIncludeObjectSchema } from './objects/ExpiredItemInclude.schema';
import { ExpiredItemCreateInputObjectSchema as ExpiredItemCreateInputObjectSchema } from './objects/ExpiredItemCreateInput.schema';
import { ExpiredItemUncheckedCreateInputObjectSchema as ExpiredItemUncheckedCreateInputObjectSchema } from './objects/ExpiredItemUncheckedCreateInput.schema';

export const ExpiredItemCreateOneSchema: z.ZodType<Prisma.ExpiredItemCreateArgs> = z.object({ select: ExpiredItemSelectObjectSchema.optional(), include: ExpiredItemIncludeObjectSchema.optional(), data: z.union([ExpiredItemCreateInputObjectSchema, ExpiredItemUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.ExpiredItemCreateArgs>;

export const ExpiredItemCreateOneZodSchema = z.object({ select: ExpiredItemSelectObjectSchema.optional(), include: ExpiredItemIncludeObjectSchema.optional(), data: z.union([ExpiredItemCreateInputObjectSchema, ExpiredItemUncheckedCreateInputObjectSchema]) }).strict();