import type { ErrorInfo } from './ErrorInfo.ts'
import type { RefundByTransactionIdReq } from './RefundByTransactionIdReq.ts'
import type { RefundByTransactionIdResp } from './RefundByTransactionIdResp.ts'

/**
 * @description successful request, see \'ResponseCode\' if request succeeded
 */
export type TransactionsRefundByTransactionId200 = RefundByTransactionIdResp

/**
 * @description Invalid request , see \'Description\' in response for more information
 */
export type TransactionsRefundByTransactionId400 = ErrorInfo

/**
 * @description Invalid username
 */
export type TransactionsRefundByTransactionId401 = ErrorInfo

export type TransactionsRefundByTransactionIdMutationRequest = RefundByTransactionIdReq | null

export type TransactionsRefundByTransactionIdMutationResponse = TransactionsRefundByTransactionId200

export type TransactionsRefundByTransactionIdMutation = {
  Response: TransactionsRefundByTransactionId200
  Request: TransactionsRefundByTransactionIdMutationRequest
  Errors: TransactionsRefundByTransactionId400 | TransactionsRefundByTransactionId401
}