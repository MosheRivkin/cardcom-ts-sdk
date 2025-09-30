import type { SpecialTransactionsResp } from '../types/SpecialTransactionsResp.ts'
import type { ToZod } from '@kubb/plugin-zod/utils'
import { specialTransactionsInfoSchema } from './special-transactions-info-schema.ts'
import { z } from 'zod'

export const specialTransactionsRespSchema: z.ZodObject<import("@kubb/plugin-zod/utils").ZodShape<SpecialTransactionsResp>> = z.object({
  ResponseCode: z.int().describe('if equel zero then success , else , a develper error see Description for more info ').optional(),
  Description: z.string().max(250).describe('Description of the ResponseCode').nullable().nullish(),
  get SpecialTransactions() {
    return z.array(specialTransactionsInfoSchema).describe('SpecialTransactions').nullable().nullish()
  },
}) as unknown as ToZod<SpecialTransactionsResp>