import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { ReturnedOrderSelectObjectSchema as ReturnedOrderSelectObjectSchema } from './objects/ReturnedOrderSelect.schema';
import { ReturnedOrderIncludeObjectSchema as ReturnedOrderIncludeObjectSchema } from './objects/ReturnedOrderInclude.schema';
import { ReturnedOrderWhereUniqueInputObjectSchema as ReturnedOrderWhereUniqueInputObjectSchema } from './objects/ReturnedOrderWhereUniqueInput.schema';
import { ReturnedOrderCreateInputObjectSchema as ReturnedOrderCreateInputObjectSchema } from './objects/ReturnedOrderCreateInput.schema';
import { ReturnedOrderUncheckedCreateInputObjectSchema as ReturnedOrderUncheckedCreateInputObjectSchema } from './objects/ReturnedOrderUncheckedCreateInput.schema';
import { ReturnedOrderUpdateInputObjectSchema as ReturnedOrderUpdateInputObjectSchema } from './objects/ReturnedOrderUpdateInput.schema';
import { ReturnedOrderUncheckedUpdateInputObjectSchema as ReturnedOrderUncheckedUpdateInputObjectSchema } from './objects/ReturnedOrderUncheckedUpdateInput.schema';

export const ReturnedOrderUpsertOneSchema: z.ZodType<Prisma.ReturnedOrderUpsertArgs> = z.object({ select: ReturnedOrderSelectObjectSchema.optional(), include: ReturnedOrderIncludeObjectSchema.optional(), where: ReturnedOrderWhereUniqueInputObjectSchema, create: z.union([ ReturnedOrderCreateInputObjectSchema, ReturnedOrderUncheckedCreateInputObjectSchema ]), update: z.union([ ReturnedOrderUpdateInputObjectSchema, ReturnedOrderUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.ReturnedOrderUpsertArgs>;

export const ReturnedOrderUpsertOneZodSchema = z.object({ select: ReturnedOrderSelectObjectSchema.optional(), include: ReturnedOrderIncludeObjectSchema.optional(), where: ReturnedOrderWhereUniqueInputObjectSchema, create: z.union([ ReturnedOrderCreateInputObjectSchema, ReturnedOrderUncheckedCreateInputObjectSchema ]), update: z.union([ ReturnedOrderUpdateInputObjectSchema, ReturnedOrderUncheckedUpdateInputObjectSchema ]) }).strict();