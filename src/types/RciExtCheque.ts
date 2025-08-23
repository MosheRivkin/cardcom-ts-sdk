export type RciExtCheque = {
  /**
   * @type string
   */
  ChequeNumber?: string | null
  /**
   * @type integer | undefined, int32
   */
  BankNumber?: number
  /**
   * @type integer | undefined, int32
   */
  SnifNumber?: number
  /**
   * @type string
   */
  AccountNumber?: string | null
  /**
   * @type string | undefined, date-time
   */
  DateCheque?: string
  /**
   * @type number | undefined, decimal
   */
  Sum?: number
}