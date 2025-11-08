import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { ExpiredItemSelectObjectSchema as ExpiredItemSelectObjectSchema } from './objects/ExpiredItemSelect.schema';
import { ExpiredItemIncludeObjectSchema as ExpiredItemIncludeObjectSchema } from './objects/ExpiredItemInclude.schema';
import { ExpiredItemWhereUniqueInputObjectSchema as ExpiredItemWhereUniqueInputObjectSchema } from './objects/ExpiredItemWhereUniqueInput.schema';

export const ExpiredItemDeleteOneSchema: z.ZodType<Prisma.ExpiredItemDeleteArgs> = z.object({ select: ExpiredItemSelectObjectSchema.optional(), include: ExpiredItemIncludeObjectSchema.optional(), where: ExpiredItemWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ExpiredItemDeleteArgs>;

export const ExpiredItemDeleteOneZodSchema = z.object({ select: ExpiredItemSelectObjectSchema.optional(), include: ExpiredItemIncludeObjectSchema.optional(), where: ExpiredItemWhereUniqueInputObjectSchema }).strict();