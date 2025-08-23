import type { JValidateType } from './JValidateType.ts'

export type AdvancedTran = {
  /**
   * @description Required only if \'IsRefund\' is true
   * @type string
   */
  ApiPassword?: string | null
  /**
   * @description Is refund transaction , \'ApiPassword\' is Required to use this option
   * @type boolean | undefined
   */
  IsRefund?: boolean
  /**
   * @description ISO name (alternative and override to \'IsoCoinId\'). ISO Coin Name from list : https://en.wikipedia.org/wiki/ISO_4217
   * @maxLength 3
   * @type string
   */
  ISOCoinName?: string | null
  /**
   * @description Type of transaction for credit card in operation : CreateTokenOnly or Suspended deal, can be J2 (simple card validation) or J5 (authoriz)
   */
  JValidateType?: JValidateType | null
  /**
   * @description SapakMutav number, for meaged terminals
   * @maxLength 15
   * @type string
   */
  SapakMutav?: string | null
  /**
   * @description Type of credit for the card, for israel cards only.
   * @default 1
   * @type integer
   */
  CreditType?: number | null
  /**
   * @type integer, int32
   */
  MTI?: number | null
  /**
   * @description Get the card number and expiretion date from account , if you need the account informatin for the invoice you need send the account Id in the document object : Document.AdvancedDefinition.AccountID and Document.AdvancedDefinition.IsLoadInfoFromAccountID=true
   * @type integer, int32
   */
  AccountIdToGetCardNumber?: number | null
  /**
   * @description capture an J5 (authoriz) request
   * @type string
   */
  ApprovalNumber?: string | null
  /**
   * @type number, decimal
   */
  FirstPayment?: number | null
  /**
   * @type number, decimal
   */
  ConstPayment?: number | null
  /**
   * @default false
   * @type boolean
   */
  IsAutoRecurringPayment?: boolean | null
  /**
   * @default false
   * @type boolean
   */
  IsCreateToken?: boolean | null
  /**
   * @default false
   * @type boolean
   */
  SendNote?: boolean | null
}