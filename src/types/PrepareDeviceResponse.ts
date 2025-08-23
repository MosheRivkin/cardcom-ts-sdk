export type PrepareDeviceResponse = {
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
   * @description TPN for TapOnPhone device
   * @type string
   */
  TPN?: string | null
  /**
   * @description Merchant Code for TapOnPhone device
   * @type string
   */
  MerchantCode?: string | null
  /**
   * @description Sapak Mutav Number of the sent Cardcom terminal number in the rquest
   * @type string
   */
  SapakMutavNumber?: string | null
  /**
   * @description Cardcom Rav Mutav terminal number of the sent Cardcom terminal number in the rquest
   * @type integer, int32
   */
  RavMutavTerminalNumber?: number | null
}