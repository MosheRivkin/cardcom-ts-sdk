import type { TransactionInfo } from './TransactionInfo.ts'

export type GetTranzactionsResp = {
  /**
   * @description if equel zero then success , else , a develper error see Description for more info
   * @type integer | undefined, int32
   */
  ResponseCode?: number
  /**
   * @description Description of the ResponseCode
   * @maxLength 250
   * @type string
   */
  Description?: string | null
  /**
   * @description Tranzactions
   * @type array
   */
  Tranzactions?: TransactionInfo[] | null
  /**
   * @type integer | undefined, int32
   */
  Page?: number
  /**
   * @type integer | undefined, int32
   */
  Page_size?: number
}