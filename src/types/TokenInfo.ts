/**
 * @description Create token result, You need to save all of the information in the database next to the account, it will be used in the Token charge process
 */
export type TokenInfo = {
  /**
   * @description Credit card token use it for future charges
   * @type string | undefined, guid
   */
  Token?: string
  /**
   * @description The date that the toke will be deleted from CardCom system, yyyyMMdd
   * @type string | undefined
   */
  TokenExDate?: string
  /**
   * @description card expiration year
   * @type integer | undefined, int32
   */
  CardYear?: number
  /**
   * @description card expiration month
   * @type integer | undefined, int32
   */
  CardMonth?: number
  /**
   * @description Issuer approval number for capture operation
   * @type string | undefined
   */
  TokenApprovalNumber?: string
  /**
   * @description card holder identity number
   * @type string | undefined
   */
  CardOwnerIdentityNumber?: string
}