import type { CreditCardTransactionsHaltedReq } from './CreditCardTransactionsHaltedReq.ts'
import type { CreditCardTransactionsHaltedResp } from './CreditCardTransactionsHaltedResp.ts'
import type { ErrorInfo } from './ErrorInfo.ts'

/**
 * @description successful request
 */
export type FinancialCreditCardTransactionsHalted200 = CreditCardTransactionsHaltedResp

/**
 * @description Invalid request , see \'Description\' in response for more information
 */
export type FinancialCreditCardTransactionsHalted400 = ErrorInfo

/**
 * @description Invalid username
 */
export type FinancialCreditCardTransactionsHalted401 = ErrorInfo

export type FinancialCreditCardTransactionsHaltedMutationRequest = CreditCardTransactionsHaltedReq | null

export type FinancialCreditCardTransactionsHaltedMutationResponse = FinancialCreditCardTransactionsHalted200

export type FinancialCreditCardTransactionsHaltedMutation = {
  Response: FinancialCreditCardTransactionsHalted200
  Request: FinancialCreditCardTransactionsHaltedMutationRequest
  Errors: FinancialCreditCardTransactionsHalted400 | FinancialCreditCardTransactionsHalted401
}