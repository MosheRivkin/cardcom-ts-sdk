import type { BankDeposites } from './BankDeposites.ts'

export type SlikaInvoicesResult = {
  /**
   * @description Document Number
   * @type integer | undefined, int64
   */
  DocNumber?: number
  /**
   * @description Document type. 1 = Tax invoice
   * @type integer | undefined, int32
   */
  DocType?: number
  /**
   * @description Date of the document
   * @type string | undefined, date-time
   */
  DocDate?: string
  /**
   * @description Original transaction amount
   * @type number | undefined, decimal
   */
  BrutoOrgCurAmt?: number
  /**
   * @description Club discounts
   * @type number | undefined, decimal
   */
  DiscOrigCurrAmt?: number
  /**
   * @description Transaction amount after club discounts
   * @type number | undefined, decimal
   */
  AftDiscNisAmt?: number
  /**
   * @description Interchange fee amount
   * @type number | undefined, decimal
   */
  IfNisAmt?: number
  /**
   * @description Club managment fee
   * @type number | undefined, decimal
   */
  MngtFeeNis?: number
  /**
   * @description Charged VAT
   * @type number | undefined, decimal
   */
  VatIfNis?: number
  /**
   * @description Deposit Amount
   * @type number | undefined, decimal
   */
  DepositAmount?: number
  /**
   * @type string
   */
  BusinessName?: string | null
  /**
   * @description Business Registration Number
   * @type string
   */
  BusinessRegistrationNumber?: string | null
  /**
   * @type string
   */
  City?: string | null
  /**
   * @type string
   */
  Address1?: string | null
  /**
   * @type string
   */
  Address2?: string | null
  /**
   * @type string
   */
  HouseNumber?: string | null
  /**
   * @type string
   */
  Email?: string | null
  /**
   * @type string
   */
  Phone?: string | null
  /**
   * @type integer | undefined, int32
   */
  SapakNumber?: number
  /**
   * @description Invoice email recipient
   * @type string
   */
  EmailRecipient?: string | null
  /**
   * @description Bank Deposits
   * @type array
   */
  BankDeposits?: BankDeposites[] | null
}