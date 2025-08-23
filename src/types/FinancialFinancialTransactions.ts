import type { ErrorInfo } from './ErrorInfo.ts'
import type { FinancialTransactionsReq } from './FinancialTransactionsReq.ts'
import type { FinancialTransactionsResp } from './FinancialTransactionsResp.ts'

/**
 * @description successful request
 */
export type FinancialFinancialTransactions200 = FinancialTransactionsResp

/**
 * @description Invalid request , see \'Description\' in response for more information
 */
export type FinancialFinancialTransactions400 = ErrorInfo

/**
 * @description Invalid username
 */
export type FinancialFinancialTransactions401 = ErrorInfo

export type FinancialFinancialTransactionsMutationRequest = FinancialTransactionsReq | null

export type FinancialFinancialTransactionsMutationResponse = FinancialFinancialTransactions200

export type FinancialFinancialTransactionsMutation = {
  Response: FinancialFinancialTransactions200
  Request: FinancialFinancialTransactionsMutationRequest
  Errors: FinancialFinancialTransactions400 | FinancialFinancialTransactions401
}