import type { FinancialTransactionsResp } from '../types/FinancialTransactionsResp.ts'
import type { ToZod } from '@kubb/plugin-zod/utils'
import { financialTransactionsSchema } from './financial-transactions-schema.ts'
import { z } from 'zod'

export const financialTransactionsRespSchema: z.ZodObject<import("@kubb/plugin-zod/utils").ZodShape<FinancialTransactionsResp>> = z.object({
  ResponseCode: z.int().describe('if equel zero then success , else , a develper error see Description for more info ').optional(),
  Description: z.string().max(250).describe('Description of the ResponseCode').nullable().nullish(),
  Page: z.int().optional(),
  Page_size: z.int().optional(),
  get FinancialTransactions() {
    return z.array(financialTransactionsSchema).describe('Financial Transactions').nullable().nullish()
  },
}) as unknown as ToZod<FinancialTransactionsResp>