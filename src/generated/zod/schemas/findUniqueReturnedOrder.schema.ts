import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { ReturnedOrderSelectObjectSchema as ReturnedOrderSelectObjectSchema } from './objects/ReturnedOrderSelect.schema';
import { ReturnedOrderIncludeObjectSchema as ReturnedOrderIncludeObjectSchema } from './objects/ReturnedOrderInclude.schema';
import { ReturnedOrderWhereUniqueInputObjectSchema as ReturnedOrderWhereUniqueInputObjectSchema } from './objects/ReturnedOrderWhereUniqueInput.schema';

export const ReturnedOrderFindUniqueSchema: z.ZodType<Prisma.ReturnedOrderFindUniqueArgs> = z.object({ select: ReturnedOrderSelectObjectSchema.optional(), include: ReturnedOrderIncludeObjectSchema.optional(), where: ReturnedOrderWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ReturnedOrderFindUniqueArgs>;

export const ReturnedOrderFindUniqueZodSchema = z.object({ select: ReturnedOrderSelectObjectSchema.optional(), include: ReturnedOrderIncludeObjectSchema.optional(), where: ReturnedOrderWhereUniqueInputObjectSchema }).strict();