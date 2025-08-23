import type { ErrorInfo } from './ErrorInfo.ts'
import type { ExtGetRecurringPaymentRsp } from './ExtGetRecurringPaymentRsp.ts'
import type { RecurringPaymentQuery } from './RecurringPaymentQuery.ts'

/**
 * @description successful request
 */
export type RecuringPaymentsGetRecurringPayment200 = ExtGetRecurringPaymentRsp

/**
 * @description Invalid request , see \'Description\' in response for more information
 */
export type RecuringPaymentsGetRecurringPayment400 = ErrorInfo

/**
 * @description Invalid username
 */
export type RecuringPaymentsGetRecurringPayment401 = ErrorInfo

/**
 * @description body Params
 */
export type RecuringPaymentsGetRecurringPaymentQueryRequest = RecurringPaymentQuery | null

export type RecuringPaymentsGetRecurringPaymentQueryResponse = RecuringPaymentsGetRecurringPayment200

export type RecuringPaymentsGetRecurringPaymentQuery = {
  Response: RecuringPaymentsGetRecurringPayment200
  Request: RecuringPaymentsGetRecurringPaymentQueryRequest
  Errors: RecuringPaymentsGetRecurringPayment400 | RecuringPaymentsGetRecurringPayment401
}