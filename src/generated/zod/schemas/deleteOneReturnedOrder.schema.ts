import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { ReturnedOrderSelectObjectSchema as ReturnedOrderSelectObjectSchema } from './objects/ReturnedOrderSelect.schema';
import { ReturnedOrderIncludeObjectSchema as ReturnedOrderIncludeObjectSchema } from './objects/ReturnedOrderInclude.schema';
import { ReturnedOrderWhereUniqueInputObjectSchema as ReturnedOrderWhereUniqueInputObjectSchema } from './objects/ReturnedOrderWhereUniqueInput.schema';

export const ReturnedOrderDeleteOneSchema: z.ZodType<Prisma.ReturnedOrderDeleteArgs> = z.object({ select: ReturnedOrderSelectObjectSchema.optional(), include: ReturnedOrderIncludeObjectSchema.optional(), where: ReturnedOrderWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ReturnedOrderDeleteArgs>;

export const ReturnedOrderDeleteOneZodSchema = z.object({ select: ReturnedOrderSelectObjectSchema.optional(), include: ReturnedOrderIncludeObjectSchema.optional(), where: ReturnedOrderWhereUniqueInputObjectSchema }).strict();