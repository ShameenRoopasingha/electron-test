import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { RestockItemSelectObjectSchema as RestockItemSelectObjectSchema } from './objects/RestockItemSelect.schema';
import { RestockItemIncludeObjectSchema as RestockItemIncludeObjectSchema } from './objects/RestockItemInclude.schema';
import { RestockItemWhereUniqueInputObjectSchema as RestockItemWhereUniqueInputObjectSchema } from './objects/RestockItemWhereUniqueInput.schema';

export const RestockItemDeleteOneSchema: z.ZodType<Prisma.RestockItemDeleteArgs> = z.object({ select: RestockItemSelectObjectSchema.optional(), include: RestockItemIncludeObjectSchema.optional(), where: RestockItemWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.RestockItemDeleteArgs>;

export const RestockItemDeleteOneZodSchema = z.object({ select: RestockItemSelectObjectSchema.optional(), include: RestockItemIncludeObjectSchema.optional(), where: RestockItemWhereUniqueInputObjectSchema }).strict();