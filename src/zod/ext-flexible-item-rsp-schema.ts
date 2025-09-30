import type { ExtFlexibleItemRsp } from '../types/ExtFlexibleItemRsp.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { z } from 'zod'

export const extFlexibleItemRspSchema: z.ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<ExtFlexibleItemRsp>, "passthrough"> = z.object({
  DocumentLineDesc: z.string().nullable().nullish(),
  Price: z.number().optional(),
  IsPriceIncludeVat: z.boolean().optional(),
  ProductId: z.string().nullable().nullish(),
}) as unknown as ToZod<ExtFlexibleItemRsp>