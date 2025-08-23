export type GetExternalUniqTranIdStatusReq = {
  /**
   * @description Cardcom terminal number
   * @type integer, int32
   */
  TerminalNumber: number
  /**
   * @description Api Name for authentication
   * @minLength 1
   * @type string
   */
  ApiName: string
  /**
   * @description External Uniq Tran Id , send your uniq trnasaction id to prevent duplication of transaction. if the same ExternalUniqTranId will be send you will receive and error code 608. see \'ExternalUniqUniqTranIdResponse\'
   * @type string
   */
  ExternalUniqTranId?: string | null
  /**
   * @description External Merchant Id
   * @type string
   */
  ExternalMerchantId?: string | null
}