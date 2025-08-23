import type { JValidateType } from './JValidateType.ts'
import type { ThreeDSecureState } from './ThreeDSecureState.ts'
import type { VirtualTerminalParams } from './VirtualTerminalParams.ts'

export type AdvancedLPDefinition = {
  /**
   * @description virtual terminal mode propertis
   */
  VirtualTerminal?: VirtualTerminalParams | null
  /**
   * @description Type of transaction for credit card in operation : CreateTokenOnly or Suspended deal, can be J2 (simple card validation) or J5 (authoriz)
   * @default 5
   */
  JValidateType?: JValidateType | null
  /**
   * @description Is AVS enabled validation enabled
   * @default false
   * @type boolean
   */
  IsAVSEnable?: boolean | null
  /**
   * @description SapakMutav number, for meaged terminals
   * @maxLength 15
   * @type string
   */
  SapakMutav?: string | null
  /**
   * @description Type of credit for the card, for israel cards only.  6 - israel credit for multiple payments
   * @default 1
   * @type integer
   */
  CreditType?: number | null
  /**
   * @description Is the transaction will be a refund deal
   * @default false
   * @type boolean
   */
  IsRefundDeal?: boolean | null
  /**
   * @description Required only if IsRefundDeal is true
   * @type string
   */
  ApiPassword?: string | null
  /**
   * @description ISO name (alternative to IsoCoinId). ISO Coin Name from list : https://en.wikipedia.org/wiki/ISO_4217
   * @maxLength 3
   * @type string
   */
  ISOCoinName?: string | null
  /**
   * @description Minimum number of payment to show to card holder
   * @minLength 1
   * @maxLength 36
   * @default 1
   * @type integer, int32
   */
  MinNumOfPayments?: number | null
  /**
   * @description Maximum number of payment to show to card holder , default 1
   * @minLength 1
   * @maxLength 36
   * @default 1
   * @type integer, int32
   */
  MaxNumOfPayments?: number | null
  /**
   * @description Change the selectd number of payments in the UI selection box , default (MinNumOfPayments)
   * @default 0
   * @type integer
   */
  SelectedNumOfPayments?: number | null
  /**
   * @description Change the selectd number of payments in the UI selection box , default (MinNumOfPayments)
   * @type number, decimal
   */
  FirstPayment?: number | null
  /**
   * @description Change the selectd number of payments in the UI selection box , default (MinNumOfPayments)
   * @type number, decimal
   */
  ConstPayment?: number | null
  /**
   * @description 3-D secure and Token tranzactions can use token instead of card number,it will be used to charge the customer if exist
   * @type string, guid
   */
  Token?: string | null
  /**
   * @description Card expiration year will be pre-set to the customer. 4 characters string.
   * @type string
   */
  CardExpirationYear?: string | null
  /**
   * @description Card expiration Month will be pre-set to the customer. Values 01-12
   * @type string
   */
  CardExpirationMonth?: string | null
  /**
   * @description Full card number, a token will be created and can be used to start 3DS process and charge
   * @default ""
   * @type string
   */
  CardNumber?: string | null
  /**
   * @description CVV used for 3DS process and charge
   * @default ""
   * @type string
   */
  CVV?: string | null
  /**
   * @description should this Tranasaction pass 3DSecure? Auto (or null): 3-D Secure validation will be performed as it configured by CardCom definition. Enable - Transaction will pass 3-D Secure validation. Disable - Transaction will NOT pass 3-D Secure validation
   */
  ThreeDSecureState?: ThreeDSecureState | null
  /**
   * @description Will open PinPad charge window on load
   * @type boolean
   */
  ShouldOpenPinpadOnPageLoad?: boolean | null
  /**
   * @description Is payment performed in external payment page
   * @default false
   * @type boolean
   */
  IsExternal?: boolean | null
}