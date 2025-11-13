import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { ExpiredItemSelectObjectSchema as ExpiredItemSelectObjectSchema } from './objects/ExpiredItemSelect.schema';
import { ExpiredItemIncludeObjectSchema as ExpiredItemIncludeObjectSchema } from './objects/ExpiredItemInclude.schema';
import { ExpiredItemWhereUniqueInputObjectSchema as ExpiredItemWhereUniqueInputObjectSchema } from './objects/ExpiredItemWhereUniqueInput.schema';

export const ExpiredItemFindUniqueSchema: z.ZodType<Prisma.ExpiredItemFindUniqueArgs> = z.object({ select: ExpiredItemSelectObjectSchema.optional(), include: ExpiredItemIncludeObjectSchema.optional(), where: ExpiredItemWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ExpiredItemFindUniqueArgs>;

export const ExpiredItemFindUniqueZodSchema = z.object({ select: ExpiredItemSelectObjectSchema.optional(), include: ExpiredItemIncludeObjectSchema.optional(), where: ExpiredItemWhereUniqueInputObjectSchema }).strict();