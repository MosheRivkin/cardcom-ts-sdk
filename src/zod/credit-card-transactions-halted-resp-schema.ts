import type { CreditCardTransactionsHaltedResp } from '../types/CreditCardTransactionsHaltedResp.ts'
import type { ToZod } from '@kubb/plugin-zod/utils'
import { creditCardTransactionSchema } from './credit-card-transaction-schema.ts'
import { z } from 'zod'

export const creditCardTransactionsHaltedRespSchema: z.ZodObject<import("@kubb/plugin-zod/utils").ZodShape<CreditCardTransactionsHaltedResp>> = z.object({
  ResponseCode: z.int().describe('if equel zero then success , else , a develper error see Description for more info ').optional(),
  Description: z.string().max(250).describe('Description of the ResponseCode').nullable().nullish(),
  get CreditCardTransactions() {
    return z.array(creditCardTransactionSchema).nullable().nullish()
  },
}) as unknown as ToZod<CreditCardTransactionsHaltedResp>