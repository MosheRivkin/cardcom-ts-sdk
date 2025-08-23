/**
 * @description Response for creating low profile page
 */
export type CreateLowProfileResponse = {
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
   * @description The unique Id of the low profile page - save it in you data base!
   * @type string, guid
   */
  LowProfileId?: string | null
  /**
   * @description the url you need to redirect the card holder
   * @type string
   */
  Url?: string | null
  /**
   * @description the url you need to redirect the card holder
   * @type string
   */
  UrlToPayPal?: string | null
  /**
   * @description the url you need to redirect the card holder
   * @type string
   */
  UrlToBit?: string | null
}