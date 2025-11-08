import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { ReturnedOrderSelectObjectSchema as ReturnedOrderSelectObjectSchema } from './objects/ReturnedOrderSelect.schema';
import { ReturnedOrderIncludeObjectSchema as ReturnedOrderIncludeObjectSchema } from './objects/ReturnedOrderInclude.schema';
import { ReturnedOrderCreateInputObjectSchema as ReturnedOrderCreateInputObjectSchema } from './objects/ReturnedOrderCreateInput.schema';
import { ReturnedOrderUncheckedCreateInputObjectSchema as ReturnedOrderUncheckedCreateInputObjectSchema } from './objects/ReturnedOrderUncheckedCreateInput.schema';

export const ReturnedOrderCreateOneSchema: z.ZodType<Prisma.ReturnedOrderCreateArgs> = z.object({ select: ReturnedOrderSelectObjectSchema.optional(), include: ReturnedOrderIncludeObjectSchema.optional(), data: z.union([ReturnedOrderCreateInputObjectSchema, ReturnedOrderUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.ReturnedOrderCreateArgs>;

export const ReturnedOrderCreateOneZodSchema = z.object({ select: ReturnedOrderSelectObjectSchema.optional(), include: ReturnedOrderIncludeObjectSchema.optional(), data: z.union([ReturnedOrderCreateInputObjectSchema, ReturnedOrderUncheckedCreateInputObjectSchema]) }).strict();