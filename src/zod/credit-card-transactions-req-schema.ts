import type { CreditCardTransactionsReq } from '../types/CreditCardTransactionsReq.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { z } from 'zod'

export const creditCardTransactionsReqSchema = z.object({
  ApiName: z.string().min(1).describe('Api Name for authentication'),
  ApiPassword: z.string().min(1).describe('Api password for authentication'),
  FromCreateDate: z.string().min(1).describe('Form Create Date DDMMYYYY'),
  ToCreateDate: z.string().min(1).describe('To Create Date DDMMYYYY'),
  Page: z.int().describe('page,  from 1'),
  Page_size: z.int().describe('page size, 10 - 2000'),
}) as unknown as ToZod<CreditCardTransactionsReq>