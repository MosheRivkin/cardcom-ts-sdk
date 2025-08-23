export type RefundByTransactionIdResp = {
  /**
   * @description if equel zero then success , else , Description for more info
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
   * @description refund transaction id
   * @type integer, int64
   */
  NewTranzactionId?: number | null
}