import type { ChangeStatusForHistoryRecurringToIrrevocableReqest } from './ChangeStatusForHistoryRecurringToIrrevocableReqest.ts'
import type { ErrorInfo } from './ErrorInfo.ts'
import type { ExtIsBankNumberValidRsp } from './ExtIsBankNumberValidRsp.ts'

/**
 * @description successful request
 */
export type RecuringPaymentsChangeStatusForHistoryRecurringToIrrevocable200 = ExtIsBankNumberValidRsp

/**
 * @description Invalid request , see \'Description\' in response for more information
 */
export type RecuringPaymentsChangeStatusForHistoryRecurringToIrrevocable400 = ErrorInfo

/**
 * @description Invalid username or password
 */
export type RecuringPaymentsChangeStatusForHistoryRecurringToIrrevocable401 = ErrorInfo

export type RecuringPaymentsChangeStatusForHistoryRecurringToIrrevocableMutationRequest = ChangeStatusForHistoryRecurringToIrrevocableReqest | null

export type RecuringPaymentsChangeStatusForHistoryRecurringToIrrevocableMutationResponse = RecuringPaymentsChangeStatusForHistoryRecurringToIrrevocable200

export type RecuringPaymentsChangeStatusForHistoryRecurringToIrrevocableMutation = {
  Response: RecuringPaymentsChangeStatusForHistoryRecurringToIrrevocable200
  Request: RecuringPaymentsChangeStatusForHistoryRecurringToIrrevocableMutationRequest
  Errors: RecuringPaymentsChangeStatusForHistoryRecurringToIrrevocable400 | RecuringPaymentsChangeStatusForHistoryRecurringToIrrevocable401
}