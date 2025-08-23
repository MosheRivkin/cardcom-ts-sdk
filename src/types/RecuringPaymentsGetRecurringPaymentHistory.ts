import type { ErrorInfo } from './ErrorInfo.ts'
import type { ExtGetRecurringPaymentHistoryRsp } from './ExtGetRecurringPaymentHistoryRsp.ts'
import type { RecurringPaymentHistoryQuery } from './RecurringPaymentHistoryQuery.ts'

/**
 * @description successful request
 */
export type RecuringPaymentsGetRecurringPaymentHistory200 = ExtGetRecurringPaymentHistoryRsp

/**
 * @description Invalid request , see \'Description\' in response for more information
 */
export type RecuringPaymentsGetRecurringPaymentHistory400 = ErrorInfo

/**
 * @description Invalid username
 */
export type RecuringPaymentsGetRecurringPaymentHistory401 = ErrorInfo

/**
 * @description body Params
 */
export type RecuringPaymentsGetRecurringPaymentHistoryQueryRequest = RecurringPaymentHistoryQuery | null

export type RecuringPaymentsGetRecurringPaymentHistoryQueryResponse = RecuringPaymentsGetRecurringPaymentHistory200

export type RecuringPaymentsGetRecurringPaymentHistoryQuery = {
  Response: RecuringPaymentsGetRecurringPaymentHistory200
  Request: RecuringPaymentsGetRecurringPaymentHistoryQueryRequest
  Errors: RecuringPaymentsGetRecurringPaymentHistory400 | RecuringPaymentsGetRecurringPaymentHistory401
}