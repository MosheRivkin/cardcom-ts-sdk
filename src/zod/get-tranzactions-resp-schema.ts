import type { GetTranzactionsResp } from '../types/GetTranzactionsResp.ts'
import type { ToZod } from '@kubb/plugin-zod/utils'
import { transactionInfoSchema } from './transaction-info-schema.ts'
import { z } from 'zod'

export const getTranzactionsRespSchema: z.ZodObject<import("@kubb/plugin-zod/utils").ZodShape<GetTranzactionsResp>> = z.object({
  ResponseCode: z.int().describe('if equel zero then success , else , a develper error see Description for more info ').optional(),
  Description: z.string().max(250).describe('Description of the ResponseCode').nullable().nullish(),
  get Tranzactions() {
    return z.array(transactionInfoSchema).describe('Tranzactions').nullable().nullish()
  },
  Page: z.int().optional(),
  Page_size: z.int().optional(),
}) as unknown as ToZod<GetTranzactionsResp>