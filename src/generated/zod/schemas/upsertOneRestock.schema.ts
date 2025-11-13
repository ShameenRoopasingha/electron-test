import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { RestockSelectObjectSchema as RestockSelectObjectSchema } from './objects/RestockSelect.schema';
import { RestockIncludeObjectSchema as RestockIncludeObjectSchema } from './objects/RestockInclude.schema';
import { RestockWhereUniqueInputObjectSchema as RestockWhereUniqueInputObjectSchema } from './objects/RestockWhereUniqueInput.schema';
import { RestockCreateInputObjectSchema as RestockCreateInputObjectSchema } from './objects/RestockCreateInput.schema';
import { RestockUncheckedCreateInputObjectSchema as RestockUncheckedCreateInputObjectSchema } from './objects/RestockUncheckedCreateInput.schema';
import { RestockUpdateInputObjectSchema as RestockUpdateInputObjectSchema } from './objects/RestockUpdateInput.schema';
import { RestockUncheckedUpdateInputObjectSchema as RestockUncheckedUpdateInputObjectSchema } from './objects/RestockUncheckedUpdateInput.schema';

export const RestockUpsertOneSchema: z.ZodType<Prisma.RestockUpsertArgs> = z.object({ select: RestockSelectObjectSchema.optional(), include: RestockIncludeObjectSchema.optional(), where: RestockWhereUniqueInputObjectSchema, create: z.union([ RestockCreateInputObjectSchema, RestockUncheckedCreateInputObjectSchema ]), update: z.union([ RestockUpdateInputObjectSchema, RestockUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.RestockUpsertArgs>;

export const RestockUpsertOneZodSchema = z.object({ select: RestockSelectObjectSchema.optional(), include: RestockIncludeObjectSchema.optional(), where: RestockWhereUniqueInputObjectSchema, create: z.union([ RestockCreateInputObjectSchema, RestockUncheckedCreateInputObjectSchema ]), update: z.union([ RestockUpdateInputObjectSchema, RestockUncheckedUpdateInputObjectSchema ]) }).strict();