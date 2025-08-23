import type { DocumentType } from './DocumentType.ts'

/**
 * @description Document create response
 */
export type DocumentInfo = {
  /**
   * @description if equel zero then success , else , a develper error see Description for more info
   * @type integer | undefined, int32
   */
  ResponseCode?: number
  /**
   * @description Description of the ResponseCode
   * @type string | undefined
   */
  Description?: string
  /**
   * @description document type that was created
   */
  DocumentType?: DocumentType
  /**
   * @description Uniqe number for this DocumentType
   * @type integer | undefined, int32
   */
  DocumentNumber?: number
  /**
   * @description Unique account Id in cardcom system
   * @type integer | undefined, int32
   */
  AccountId?: number
  /**
   * @description Customer accounting number, only if a customer card was created or consolidated.
   * @type string
   */
  ForeignAccountNumber?: string | null
  /**
   * @description Unique identifier for the site - informative parameter.
   * @type string
   */
  SiteUniqueId?: string | null
  /**
   * @description Url to a document (invoice, etc), if created
   * @type string
   */
  DocumentUrl?: string | null
}