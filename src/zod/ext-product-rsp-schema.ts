import type { ExtProductRsp } from '../types/ExtProductRsp.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { z } from 'zod'

export const extProductRspSchema: z.ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<ExtProductRsp>, "passthrough"> = z.object({
  ProductId: z.string().nullable().nullish(),
  Quantity: z.number().optional(),
}) as unknown as ToZod<ExtProductRsp>