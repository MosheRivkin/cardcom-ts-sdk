export type ProcessTransactionResponse = {
  /**
   * @description Response code: 0 - Success / Other values - Error (See Description for more info)
   * @type integer | undefined, int32
   */
  ResponseCode?: number
  /**
   * @description Description for ResponseCode
   * @type string
   */
  Description?: string | null
  /**
   * @description Deal number in Cardcom systems
   * @type integer, int64
   */
  DealNumber?: number | null
}