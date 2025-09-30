import type { FinancialTransactionsReq } from '../types/FinancialTransactionsReq.ts'
import type { ToZod } from '@kubb/plugin-zod/utils'
import { z } from 'zod'

export const financialTransactionsReqSchema: z.ZodObject<import("@kubb/plugin-zod/utils").ZodShape<FinancialTransactionsReq>> = z.object({
  ApiName: z.string().min(1).describe('Api Name for authentication'),
  ApiPassword: z.string().min(1).describe('Api password for authentication'),
  FromCreateDate: z.string().describe('Form Create Date DDMMYYYY').nullable().nullish(),
  ToCreateDate: z.string().describe('To Create Date DDMMYYYY').nullable().nullish(),
  AddDepositedTransaction: z.boolean().describe('Will return transaction that have bean depisited in the fron to dates').nullable().nullish(),
  Page: z.int().describe('page,  from 1'),
  BankDepositeId: z.int().describe('BankDepositeId').optional(),
  Page_size: z.int().describe('page size, 10 - 2000'),
}) as unknown as ToZod<FinancialTransactionsReq>