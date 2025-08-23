import type { DocumentInfo } from './DocumentInfo.ts'
import type { LowProfileUIValues } from './LowProfileUIValues.ts'
import type { LPUtmData } from './LPUtmData.ts'
import type { Operation } from './Operation.ts'
import type { SuspendedInfo } from './SuspendedInfo.ts'
import type { TokenInfo } from './TokenInfo.ts'
import type { TransactionInfo } from './TransactionInfo.ts'

/**
 * @description Result of the low profile page deal
 */
export type LowProfileResult = {
  /**
   * @description if equel zero then success , else , a develper error see Description for more info
   * @type integer | undefined, int32
   */
  ResponseCode?: number
  /**
   * @description Description of the ResponseCode
   * @type string
   */
  Description?: string | null
  /**
   * @description Cardcom terminal number
   * @type integer | undefined, int32
   */
  TerminalNumber?: number
  /**
   * @description The unique ID of the low profile transaction
   * @type string | undefined, guid
   */
  LowProfileId?: string
  /**
   * @description The Id of the Credit card Transacion
   * @type integer | undefined, int64
   */
  TranzactionId?: number
  /**
   * @description Same value that was sent on the CreateLowProfile request
   * @type string
   */
  ReturnValue?: string | null
  /**
   * @description Type of operation
   */
  Operation?: Operation | null
  /**
   * @description Will contain the value that the card holder enter in the UI
   */
  UIValues?: LowProfileUIValues
  /**
   * @description Will no be null is a documents is created
   */
  DocumentInfo?: DocumentInfo | null
  /**
   * @description Created token information, Will no be null at operations:  ChargeAndCreateToken, CreateTokenOnly
   */
  TokenInfo?: TokenInfo | null
  /**
   * @description SuspendedI deal information, Will no be null at operations: SuspendedDeal
   */
  SuspendedInfo?: SuspendedInfo | null
  /**
   * @description Transaction information, Will no be null at operations: ChargeOnly, ChargeAndCreateToken
   */
  TranzactionInfo?: TransactionInfo | null
  /**
   * @description ExternalPayment indicator.
   * @type string
   */
  ExternalPaymentVector?: string | null
  /**
   * @description Country
   * @type string
   */
  Country?: string | null
  /**
   * @description UTM data
   */
  UTM?: LPUtmData | null
  /**
   * @description Issuer authorization code description
   * @type string
   */
  IssuerAuthCodeDescription?: string | null
}