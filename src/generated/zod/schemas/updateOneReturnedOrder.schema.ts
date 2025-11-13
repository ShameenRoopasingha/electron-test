import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { ReturnedOrderSelectObjectSchema as ReturnedOrderSelectObjectSchema } from './objects/ReturnedOrderSelect.schema';
import { ReturnedOrderIncludeObjectSchema as ReturnedOrderIncludeObjectSchema } from './objects/ReturnedOrderInclude.schema';
import { ReturnedOrderUpdateInputObjectSchema as ReturnedOrderUpdateInputObjectSchema } from './objects/ReturnedOrderUpdateInput.schema';
import { ReturnedOrderUncheckedUpdateInputObjectSchema as ReturnedOrderUncheckedUpdateInputObjectSchema } from './objects/ReturnedOrderUncheckedUpdateInput.schema';
import { ReturnedOrderWhereUniqueInputObjectSchema as ReturnedOrderWhereUniqueInputObjectSchema } from './objects/ReturnedOrderWhereUniqueInput.schema';

export const ReturnedOrderUpdateOneSchema: z.ZodType<Prisma.ReturnedOrderUpdateArgs> = z.object({ select: ReturnedOrderSelectObjectSchema.optional(), include: ReturnedOrderIncludeObjectSchema.optional(), data: z.union([ReturnedOrderUpdateInputObjectSchema, ReturnedOrderUncheckedUpdateInputObjectSchema]), where: ReturnedOrderWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ReturnedOrderUpdateArgs>;

export const ReturnedOrderUpdateOneZodSchema = z.object({ select: ReturnedOrderSelectObjectSchema.optional(), include: ReturnedOrderIncludeObjectSchema.optional(), data: z.union([ReturnedOrderUpdateInputObjectSchema, ReturnedOrderUncheckedUpdateInputObjectSchema]), where: ReturnedOrderWhereUniqueInputObjectSchema }).strict();