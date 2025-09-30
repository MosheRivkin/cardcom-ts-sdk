import type { GetExternalUniqTranIdStatusReq } from '../types/GetExternalUniqTranIdStatusReq.ts'
import type { ToZod } from '@kubb/plugin-zod/utils'
import { z } from 'zod'

export const getExternalUniqTranIdStatusReqSchema: z.ZodObject<import("@kubb/plugin-zod/utils").ZodShape<GetExternalUniqTranIdStatusReq>> = z.object({
  TerminalNumber: z.int().describe('Cardcom terminal number'),
  ApiName: z.string().min(1).describe('Api Name for authentication'),
  ExternalUniqTranId: z
    .string()
    .describe(
      "External Uniq Tran Id , send your uniq trnasaction id to prevent duplication of transaction. if the same ExternalUniqTranId will be send you will receive and error code 608. see 'ExternalUniqUniqTranIdResponse' ",
    )
    .nullable()
    .nullish(),
  ExternalMerchantId: z.string().describe('External Merchant Id').nullable().nullish(),
}) as unknown as ToZod<GetExternalUniqTranIdStatusReq>