import type { Acquire } from './Acquire.ts'
import type { Brand } from './Brand.ts'
import type { CardInfo } from './CardInfo.ts'
import type { CardNumberEntryMode } from './CardNumberEntryMode.ts'
import type { CustomField } from './CustomField.ts'
import type { DealType } from './DealType.ts'
import type { DocumentType } from './DocumentType.ts'
import type { Issuer } from './Issuer.ts'
import type { PaymentType } from './PaymentType.ts'

export type TransactionInfo = {
  /**
   * @description if equal zero then success , 700 and 701 success for J2 and J5 transaction
   * @type integer | undefined, int32
   */
  ResponseCode?: number
  /**
   * @description Description of the ResponseCode
   * @type string
   */
  Description?: string | null
  /**
   * @description The Id of the Credit card Tranzacion
   * @type integer | undefined, int64
   */
  TranzactionId?: number
  /**
   * @description Cardcom terminal number
   * @type integer | undefined, int32
   */
  TerminalNumber?: number
  /**
   * @description Transaction amount
   * @type number | undefined, decimal
   */
  Amount?: number
  /**
   * @description ISO Coin Code ,1 - ILS, 2 - USD, else ISO Coin from list : https://en.wikipedia.org/wiki/ISO_4217
   * @type integer | undefined, int32
   */
  CoinId?: number
  /**
   * @description Coupon Number - מספר שובר
   * @type string
   */
  CouponNumber?: string | null
  /**
   * @description Transaction date
   * @type string | undefined, date-time
   */
  CreateDate?: string
  /**
   * @description The last 4 card digits.
   * @type integer | undefined, int32
   */
  Last4CardDigits?: number
  /**
   * @description The last 4 card digits (string)
   * @type string
   */
  Last4CardDigitsString?: string | null
  /**
   * @description The first digits of the credit card.
   * @type integer | undefined, int64
   */
  FirstCardDigits?: number
  /**
   * @description J-parameter, type of test to perform on the card
   * @type string
   */
  JParameter?: string | null
  /**
   * @description Credit card Validity Month (MM)
   * @type integer | undefined
   */
  CardMonth?: number
  /**
   * @description Credit card Validity Month (YY)
   * @type integer | undefined
   */
  CardYear?: number
  /**
   * @description Approval Number given by the manufacturer
   * @type string
   */
  ApprovalNumber?: string | null
  /**
   * @description First payment amount
   * @type number | undefined, decimal
   */
  FirstPaymentAmount?: number
  /**
   * @description Amount of additional payments
   * @type number | undefined, decimal
   */
  ConstPaymentAmount?: number
  /**
   * @description The number of payments for the deal.
   * @type integer | undefined, int32
   */
  NumberOfPayments?: number
  /**
   * @description the card type, from where was it manifactured.
   */
  CardInfo?: CardInfo
  /**
   * @description card owner name
   * @type string
   */
  CardOwnerName?: string | null
  /**
   * @description card owner phone.
   * @type string
   */
  CardOwnerPhone?: string | null
  /**
   * @description the card owner email.
   * @type string
   */
  CardOwnerEmail?: string | null
  /**
   * @description the card holder identity number.
   * @type string
   */
  CardOwnerIdentityNumber?: string | null
  /**
   * @description The token number, Eve, will be saved in the database.
   * @type string, guid
   */
  Token?: string | null
  /**
   * @description Card name for information only
   * @type string
   */
  CardName?: string | null
  /**
   * @description Customer number at work in Rab Benteb
   * @type string
   */
  SapakMutav?: string | null
  /**
   * @description Unique transaction identifier If a credit/cancellation was made from the transaction, the UID will be the same as the original transaction. Otherwise, the UID will be different.
   * @type string
   */
  Uid?: string | null
  /**
   * @description מספר הפקדה / ריכוז
   * @type string
   */
  ConcentrationNumber?: string | null
  /**
   * @description Document number
   * @type integer, int32
   */
  DocumentNumber?: number | null
  /**
   * @description Document DocumentType
   */
  DocumentType?: DocumentType | null
  /**
   * @description Identification number for credit card companies
   * @type string
   */
  Rrn?: string | null
  /**
   * @description the card brand, vias\\ mastercard \\ dinners \\ americal express.
   */
  Brand?: Brand
  /**
   * @description The transaction clearing company
   */
  Acquire?: Acquire
  /**
   * @description Who was the card issuer?
   */
  Issuer?: Issuer
  /**
   * @description Credit type - regular debit \\ payment \\ credit \\ discount
   */
  PaymentType?: PaymentType
  /**
   * @description where was the deal made? \"Emv\" \\ \"Internet\" \\ \"Phone\"
   */
  CardNumberEntryMode?: CardNumberEntryMode
  /**
   * @description Type + Transaction Source - Cancellation \\ Debit \\ Direct Debit \\ Credit
   */
  DealType?: DealType
  /**
   * @description was it a refund deal?
   * @type boolean | undefined
   */
  IsRefund?: boolean
  /**
   * @type string
   */
  DocumentUrl?: string | null
  /**
   * @description The custome values that were filled and forwarded
   * @type array
   */
  CustomFields?: CustomField[] | null
  /**
   * @description Is the card from abroad?
   * @type boolean | undefined
   */
  IsAbroadCard?: boolean
  /**
   * @description Issuer authorization code description
   * @type string
   */
  IssuerAuthCodeDescription?: string | null
}