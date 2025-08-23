import type { RecurringPaymentHistory } from './RecurringPaymentHistory.ts'

/**
 * @description List of Recurring Payments
 */
export type ExtGetRecurringPaymentHistoryRsp = {
  /**
   * @description Response code , if it equel to zero than all is OK , else error see Description
   * @type integer | undefined, int32
   */
  ResponseCode?: number
  /**
   * @description Description for errors only
   * @type string
   */
  Description?: string | null
  /**
   * @type array
   */
  RecurringPaymentHistory?: RecurringPaymentHistory[] | null
}