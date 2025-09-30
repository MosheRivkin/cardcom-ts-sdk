import type { ExtFlexibleItemRsp } from '../types/ExtFlexibleItemRsp.ts'
import type { ToZod } from '@kubb/plugin-zod/utils'
import { z } from 'zod'

export const extFlexibleItemRspSchema: z.ZodObject<import("@kubb/plugin-zod/utils").ZodShape<ExtFlexibleItemRsp>> = z.object({
  DocumentLineDesc: z.string().nullable().nullish(),
  Price: z.number().optional(),
  IsPriceIncludeVat: z.boolean().optional(),
  ProductId: z.string().nullable().nullish(),
}) as unknown as ToZod<ExtFlexibleItemRsp>