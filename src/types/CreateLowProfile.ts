import type { AdvancedLPDefinition } from './AdvancedLPDefinition.ts'
import type { DocumentLP } from './DocumentLP.ts'
import type { LPUtmData } from './LPUtmData.ts'
import type { Operation } from './Operation.ts'
import type { UIDefinition } from './UIDefinition.ts'

/**
 * @description create a new one time, Iframe \\ redirect page
 */
export type CreateLowProfile = {
  /**
   * @description Cardcom terminal number
   * @type integer, int32
   */
  TerminalNumber: number
  /**
   * @description Api Name for authentication
   * @minLength 1
   * @type string
   */
  ApiName: string
  /**
   * @description Type of operation to perform , default - ChargeOnly
   * @default "ChargeOnly"
   */
  Operation?: Operation
  /**
   * @description A string of data to save on the transaction, usually send your unique order Id, you will get it back in the WebHook URL
   * @maxLength 250
   * @type string
   */
  ReturnValue?: string | null
  /**
   * @description Amount of tranzaction (12.36)
   * @type number, decimal
   */
  Amount: number
  /**
   * @description Url to redirect the card holder on successful transaction , (http(s)://site.com/Success)
   * @minLength 1
   * @maxLength 500
   * @type string
   */
  SuccessRedirectUrl: string
  /**
   * @description Url to redicet on failed transaction (http(s)://site.com/failed)
   * @minLength 1
   * @maxLength 500
   * @type string
   */
  FailedRedirectUrl: string
  /**
   * @type string
   */
  CancelRedirectUrl?: string | null
  /**
   * @description A webhook URL is a web address that receives real-time data about the transaction
   * @minLength 1
   * @maxLength 500
   * @type string
   */
  WebHookUrl: string
  /**
   * @description Text to show to card holder if no documents is send
   * @maxLength 250
   * @type string
   */
  ProductName?: string | null
  /**
   * @description Page Language - he,en,ru,sp (https://cardcomapinametovalue.zendesk.com/hc/he/articles/27007768777234-שפות-לדף-פרופיל-נמוך-Language)
   * @maxLength 2
   * @default "he"
   * @type string
   */
  Language?: string | null
  /**
   * @description ISO Coin Code ,1 - ILS, 2 - USD, else ISO Coin from list : https://en.wikipedia.org/wiki/ISO_4217
   * @default 1
   * @type integer, int32
   */
  ISOCoinId?: number | null
  /**
   * @description UI Definition for the created page
   */
  UIDefinition?: UIDefinition | null
  /**
   * @description Advanced transaction definition
   */
  AdvancedDefinition?: AdvancedLPDefinition | null
  /**
   * @description Document information
   */
  Document?: DocumentLP | null
  /**
   * @description Document information
   */
  UTM?: LPUtmData | null
}