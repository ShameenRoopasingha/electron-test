import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { RestockSelectObjectSchema as RestockSelectObjectSchema } from './objects/RestockSelect.schema';
import { RestockIncludeObjectSchema as RestockIncludeObjectSchema } from './objects/RestockInclude.schema';
import { RestockUpdateInputObjectSchema as RestockUpdateInputObjectSchema } from './objects/RestockUpdateInput.schema';
import { RestockUncheckedUpdateInputObjectSchema as RestockUncheckedUpdateInputObjectSchema } from './objects/RestockUncheckedUpdateInput.schema';
import { RestockWhereUniqueInputObjectSchema as RestockWhereUniqueInputObjectSchema } from './objects/RestockWhereUniqueInput.schema';

export const RestockUpdateOneSchema: z.ZodType<Prisma.RestockUpdateArgs> = z.object({ select: RestockSelectObjectSchema.optional(), include: RestockIncludeObjectSchema.optional(), data: z.union([RestockUpdateInputObjectSchema, RestockUncheckedUpdateInputObjectSchema]), where: RestockWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.RestockUpdateArgs>;

export const RestockUpdateOneZodSchema = z.object({ select: RestockSelectObjectSchema.optional(), include: RestockIncludeObjectSchema.optional(), data: z.union([RestockUpdateInputObjectSchema, RestockUncheckedUpdateInputObjectSchema]), where: RestockWhereUniqueInputObjectSchema }).strict();