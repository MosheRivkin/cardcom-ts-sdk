export type SpecialTransactionsReq = {
  /**
   * @description Api Name for authentication
   * @minLength 1
   * @type string
   */
  ApiName: string
  /**
   * @description Api password for authentication
   * @minLength 1
   * @type string
   */
  ApiPassword: string
  /**
   * @description Form Date DDMMYYYY
   * @minLength 1
   * @type string
   */
  FromDate: string
  /**
   * @description To Date DDMMYYYY
   * @minLength 1
   * @type string
   */
  ToDate: string
}