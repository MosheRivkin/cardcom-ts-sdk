import type { ErrorInfo } from './ErrorInfo.ts'
import type { ProcessTransactionRequest } from './ProcessTransactionRequest.ts'
import type { ProcessTransactionResponse } from './ProcessTransactionResponse.ts'

/**
 * @description Successful request
 */
export type TapTransactionsProcessTransaction200 = ProcessTransactionResponse

/**
 * @description Invalid request , see \'Description\' in response for more information
 */
export type TapTransactionsProcessTransaction400 = ErrorInfo

/**
 * @description Invalid username
 */
export type TapTransactionsProcessTransaction401 = ErrorInfo

export type TapTransactionsProcessTransactionMutationRequest = ProcessTransactionRequest | null

export type TapTransactionsProcessTransactionMutationResponse = TapTransactionsProcessTransaction200

export type TapTransactionsProcessTransactionMutation = {
  Response: TapTransactionsProcessTransaction200
  Request: TapTransactionsProcessTransactionMutationRequest
  Errors: TapTransactionsProcessTransaction400 | TapTransactionsProcessTransaction401
}