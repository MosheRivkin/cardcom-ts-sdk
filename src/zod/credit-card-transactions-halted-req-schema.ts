import type { CreditCardTransactionsHaltedReq } from '../types/CreditCardTransactionsHaltedReq.ts'
import type { ToZod } from '@kubb/plugin-zod/utils'
import { z } from 'zod'

export const creditCardTransactionsHaltedReqSchema: z.ZodObject<import("@kubb/plugin-zod/utils").ZodShape<CreditCardTransactionsHaltedReq>> = z.object({
  ApiName: z.string().min(1).describe('Api Name for authentication'),
  ApiPassword: z.string().min(1).describe('Api password for authentication'),
}) as unknown as ToZod<CreditCardTransactionsHaltedReq>