import type { BankDepositesReq } from './BankDepositesReq.ts'
import type { BankDepositesResp } from './BankDepositesResp.ts'
import type { ErrorInfo } from './ErrorInfo.ts'

/**
 * @description successful request
 */
export type FinancialBankDeposites200 = BankDepositesResp

/**
 * @description Invalid request , see \'Description\' in response for more information
 */
export type FinancialBankDeposites400 = ErrorInfo

/**
 * @description Invalid username
 */
export type FinancialBankDeposites401 = ErrorInfo

export type FinancialBankDepositesMutationRequest = BankDepositesReq | null

export type FinancialBankDepositesMutationResponse = FinancialBankDeposites200

export type FinancialBankDepositesMutation = {
  Response: FinancialBankDeposites200
  Request: FinancialBankDepositesMutationRequest
  Errors: FinancialBankDeposites400 | FinancialBankDeposites401
}