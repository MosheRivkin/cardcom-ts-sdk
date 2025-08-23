export type ExUpdatTokesProsses = {
  /**
   * @type integer | undefined, int32
   */
  ID?: number
  /**
   * @description The row number of this work
   * @type integer | undefined, int32
   */
  ExcelRow?: number
  /**
   * @description information only , original code of the acquiring
   * @type string
   */
  OriginalStatus?: string | null
  /**
   * @description 1- New card number , 2- the Card was canceled, there is no new Card Number , 3 - charge back , 4 - card owner ask to cancel deal
   * @type integer | undefined, int32
   */
  Status?: number
  /**
   * @type string
   */
  Token?: string | null
  /**
   * @type string
   */
  NewExpirationDateYYYY?: string | null
  /**
   * @type string
   */
  NewExpirationDateMM?: string | null
  /**
   * @type string
   */
  Last4Digits?: string | null
}