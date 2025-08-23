import type { ErrorInfo } from './ErrorInfo.ts'
import type { GetTransactionsRequest } from './GetTransactionsRequest.ts'
import type { ProcessTransactionResponse } from './ProcessTransactionResponse.ts'

/**
 * @description Successful request
 */
export type TapTransactionsGetTransactions200 = ProcessTransactionResponse

/**
 * @description Invalid request , see \'Description\' in response for more information
 */
export type TapTransactionsGetTransactions400 = ErrorInfo

/**
 * @description Invalid username
 */
export type TapTransactionsGetTransactions401 = ErrorInfo

export type TapTransactionsGetTransactionsMutationRequest = GetTransactionsRequest | null

export type TapTransactionsGetTransactionsMutationResponse = TapTransactionsGetTransactions200

export type TapTransactionsGetTransactionsMutation = {
  Response: TapTransactionsGetTransactions200
  Request: TapTransactionsGetTransactionsMutationRequest
  Errors: TapTransactionsGetTransactions400 | TapTransactionsGetTransactions401
}