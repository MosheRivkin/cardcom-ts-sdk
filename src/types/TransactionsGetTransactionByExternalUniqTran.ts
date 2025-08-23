import type { ErrorInfo } from './ErrorInfo.ts'
import type { GetExternalUniqTranIdStatusReq } from './GetExternalUniqTranIdStatusReq.ts'
import type { TransactionInfo } from './TransactionInfo.ts'

/**
 * @description successful request, see \'ResponseCode\' if request succeeded
 */
export type TransactionsGetTransactionByExternalUniqTran200 = TransactionInfo

/**
 * @description Invalid request , see \'Description\' in response for more information
 */
export type TransactionsGetTransactionByExternalUniqTran400 = ErrorInfo

/**
 * @description Invalid username
 */
export type TransactionsGetTransactionByExternalUniqTran401 = ErrorInfo

export type TransactionsGetTransactionByExternalUniqTranMutationRequest = GetExternalUniqTranIdStatusReq | null

export type TransactionsGetTransactionByExternalUniqTranMutationResponse = TransactionsGetTransactionByExternalUniqTran200

export type TransactionsGetTransactionByExternalUniqTranMutation = {
  Response: TransactionsGetTransactionByExternalUniqTran200
  Request: TransactionsGetTransactionByExternalUniqTranMutationRequest
  Errors: TransactionsGetTransactionByExternalUniqTran400 | TransactionsGetTransactionByExternalUniqTran401
}