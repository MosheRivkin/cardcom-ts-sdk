import type { ErrorInfo } from './ErrorInfo.ts'
import type { ExtShvaParams } from './ExtShvaParams.ts'
import type { TransactionInfoRequest } from './TransactionInfoRequest.ts'

/**
 * @description successful request
 */
export type TransactionsGetTransactionInfoById200 = ExtShvaParams[]

/**
 * @description Invalid request , see \'Description\' in response for more information
 */
export type TransactionsGetTransactionInfoById400 = ErrorInfo

/**
 * @description Invalid username
 */
export type TransactionsGetTransactionInfoById401 = ErrorInfo

export type TransactionsGetTransactionInfoByIdMutationRequest = TransactionInfoRequest | null

export type TransactionsGetTransactionInfoByIdMutationResponse = TransactionsGetTransactionInfoById200

export type TransactionsGetTransactionInfoByIdMutation = {
  Response: TransactionsGetTransactionInfoById200
  Request: TransactionsGetTransactionInfoByIdMutationRequest
  Errors: TransactionsGetTransactionInfoById400 | TransactionsGetTransactionInfoById401
}