export type SdkTransactionInfo = {
  /**
   * @description Tap transaction total sum
   * @minLength 1
   * @type string
   */
  Amount: string
  /**
   * @description Tap transaction type: 1 - Charge / 51 - Refund
   * @type integer, int32
   */
  Type: number
  /**
   * @description Tap transaction credit type: 1 - Single payment / 6 - Credit payments / 8 - Regular payments
   * @type integer, int32
   */
  CreditType: number
  /**
   * @description Tap transaction number of payments
   * @type integer, int32
   */
  NumberOfPayments: number
  /**
   * @description Tap transaction customer name
   * @minLength 1
   * @maxLength 50
   * @type string
   */
  CustomerName: string
  /**
   * @description Tap transaction customer name email
   * @maxLength 150
   * @type string
   */
  CustomerEmail?: string | null
  /**
   * @description Tap transaction customer phone number
   * @maxLength 50
   * @type string
   */
  CustomerPhoneNumber?: string | null
  /**
   * @description Tap transaction customer id number
   * @maxLength 50
   * @type string
   */
  CustomerIdNumber?: string | null
  /**
   * @description Tap transaction response code
   * @type integer, int32
   */
  ResponseCode: number
  /**
   * @description Tap transaction message
   * @minLength 1
   * @type string
   */
  Message: string
  /**
   * @description Tap transaction status
   * @minLength 1
   * @type string
   */
  Status: string
  /**
   * @description Tap transaction id
   * @type integer, int32
   */
  TransactionId: number
  /**
   * @description Tap transaction return code
   * @type integer, int32
   */
  ReturnCode: number
  /**
   * @description Tap transaction return message
   * @minLength 1
   * @type string
   */
  ReturnMessage: string
  /**
   * @description Tap transaction card number
   * @minLength 1
   * @type string
   */
  CardNumber: string
  /**
   * @description Tap transaction card expire month and year in MM/YY format
   * @minLength 1
   * @type string
   */
  CardExpireDateMMYY: string
  /**
   * @description Tap transaction card brand code
   * @type integer, int32
   */
  CardBrandCode: number
  /**
   * @description Tap transaction card issuer code
   * @type integer, int32
   */
  CardIssuerCode: number
  /**
   * @description Tap transaction card financer code
   * @type integer, int32
   */
  CardFinancerCode: number
  /**
   * @description Tap transaction card token
   * @minLength 1
   * @type string
   */
  Token: string
  /**
   * @description Tap transaction approval number
   * @minLength 1
   * @type string
   */
  ApprovalNumber: string
  /**
   * @description Tap transaction result record
   * @minLength 1
   * @type string
   */
  ResultRecord: string
  /**
   * @description Tap transaction UID
   * @minLength 1
   * @type string
   */
  UID: string
}