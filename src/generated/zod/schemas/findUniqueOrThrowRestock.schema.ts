import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { RestockSelectObjectSchema as RestockSelectObjectSchema } from './objects/RestockSelect.schema';
import { RestockIncludeObjectSchema as RestockIncludeObjectSchema } from './objects/RestockInclude.schema';
import { RestockWhereUniqueInputObjectSchema as RestockWhereUniqueInputObjectSchema } from './objects/RestockWhereUniqueInput.schema';

export const RestockFindUniqueOrThrowSchema: z.ZodType<Prisma.RestockFindUniqueOrThrowArgs> = z.object({ select: RestockSelectObjectSchema.optional(), include: RestockIncludeObjectSchema.optional(), where: RestockWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.RestockFindUniqueOrThrowArgs>;

export const RestockFindUniqueOrThrowZodSchema = z.object({ select: RestockSelectObjectSchema.optional(), include: RestockIncludeObjectSchema.optional(), where: RestockWhereUniqueInputObjectSchema }).strict();