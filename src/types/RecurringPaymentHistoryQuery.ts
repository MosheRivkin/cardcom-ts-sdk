import type { FilterBy } from './FilterBy.ts'

export type RecurringPaymentHistoryQuery = {
  /**
   * @description API User Name
   * @type string
   */
  apiUserName?: string | null
  /**
   * @description API Password
   * @type string
   */
  apiPassword?: string | null
  /**
   * @description RowId for history
   * @type integer, int32
   */
  RowId?: number | null
  /**
   * @description AccountId for history not req if you send RowId
   * @type integer, int32
   */
  AccountId?: number | null
  /**
   * @description FromDate CreateDate , format  DDMMYYYY , req only if AccountId is sent
   * @type string
   */
  FromDate?: string | null
  /**
   * @description ToDate CreateDate , format DDMMYYYY , req only if AccountId is sent
   * @type string
   */
  ToDate?: string | null
  /**
   * @description type of operation to perform
   * @default "CreateDate"
   */
  FilterBy?: FilterBy | null
}