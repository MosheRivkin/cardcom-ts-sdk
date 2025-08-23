import type { ErrorInfo } from './ErrorInfo.ts'
import type { GetTranzactionsResp } from './GetTranzactionsResp.ts'
import type { ListTransactionsReq } from './ListTransactionsReq.ts'

/**
 * @description successful request
 */
export type TransactionsListTransactions200 = GetTranzactionsResp

/**
 * @description Invalid request , see \'Description\' in response for more information
 */
export type TransactionsListTransactions400 = ErrorInfo

/**
 * @description Invalid username
 */
export type TransactionsListTransactions401 = ErrorInfo

export type TransactionsListTransactionsMutationRequest = ListTransactionsReq | null

export type TransactionsListTransactionsMutationResponse = TransactionsListTransactions200

export type TransactionsListTransactionsMutation = {
  Response: TransactionsListTransactions200
  Request: TransactionsListTransactionsMutationRequest
  Errors: TransactionsListTransactions400 | TransactionsListTransactions401
}