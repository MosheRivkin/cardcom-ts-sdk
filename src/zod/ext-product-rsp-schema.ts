import type { ExtProductRsp } from '../types/ExtProductRsp.ts'
import type { ToZod } from '@kubb/plugin-zod/utils'
import { z } from 'zod'

export const extProductRspSchema: z.ZodObject<import("@kubb/plugin-zod/utils").ZodShape<ExtProductRsp>> = z.object({
  ProductId: z.string().nullable().nullish(),
  Quantity: z.number().optional(),
}) as unknown as ToZod<ExtProductRsp>