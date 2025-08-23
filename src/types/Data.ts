import type { ReportCodes } from './ReportCodes.ts'

export type Data = {
  /**
   * @type integer | undefined, int64
   */
  MuhlafID?: number
  /**
   * @type integer | undefined, int32
   */
  EntryType?: number
  /**
   * @type integer | undefined, int32
   */
  EntryNumber?: number
  /**
   * @type integer | undefined, int32
   */
  SapakNumber?: number
  /**
   * @type string
   */
  OldCreditNumber?: string | null
  /**
   * @type string
   */
  NewCreditNumber?: string | null
  /**
   * @description Report Code ,1 - New Credit Card, 2 - Card was canceled – no new number issued, 3 - CHB, 4 - Card was canceled – no new number issued , 5 - Card Unfreeze
   */
  ReportCode?: ReportCodes
  /**
   * @type string
   */
  NewCardExpirationDate?: string | null
}