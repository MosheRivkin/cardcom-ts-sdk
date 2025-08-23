import type { CreditCardTransactionsReq } from './CreditCardTransactionsReq.ts'
import type { CreditCardTransactionsResp } from './CreditCardTransactionsResp.ts'
import type { ErrorInfo } from './ErrorInfo.ts'

/**
 * @description successful request
 */
export type FinancialCreditCardTransactions200 = CreditCardTransactionsResp

/**
 * @description Invalid request , see \'Description\' in response for more information
 */
export type FinancialCreditCardTransactions400 = ErrorInfo

/**
 * @description Invalid username
 */
export type FinancialCreditCardTransactions401 = ErrorInfo

export type FinancialCreditCardTransactionsMutationRequest = CreditCardTransactionsReq | null

export type FinancialCreditCardTransactionsMutationResponse = FinancialCreditCardTransactions200

export type FinancialCreditCardTransactionsMutation = {
  Response: FinancialCreditCardTransactions200
  Request: FinancialCreditCardTransactionsMutationRequest
  Errors: FinancialCreditCardTransactions400 | FinancialCreditCardTransactions401
}