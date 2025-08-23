import type { ExtRecurringPaymentsRsp } from './ExtRecurringPaymentsRsp.ts'

/**
 * @description List of Recurring Payments
 */
export type ExtGetRecurringPaymentRsp = {
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
   * @description Recurring Payments list
   * @type array
   */
  UpdateList?: ExtRecurringPaymentsRsp[] | null
}