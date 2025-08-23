import type { Document } from './Document.ts'
import type { RciExtCheque } from './RciExtCheque.ts'
import type { RciExtCustome } from './RciExtCustome.ts'
import type { RciExtDealNum } from './RciExtDealNum.ts'

export type CreateDocumentRequest = {
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
   * @description The document to be created
   */
  Document: Document
  /**
   * @description The amount in cache
   * @type number | undefined, decimal
   */
  Cash?: number
  /**
   * @description Array of cheques
   * @type array
   */
  Cheques?: RciExtCheque[] | null
  /**
   * @description Array of cheques
   * @type array
   */
  CustomFields?: RciExtCustome[] | null
  /**
   * @description Array of cheques
   * @type array
   */
  DealNumbers?: RciExtDealNum[] | null
  /**
   * @description Array of cheques
   * @type boolean | undefined
   */
  IsSendSMS?: boolean
}