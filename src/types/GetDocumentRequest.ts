import type { DocumentToCreate } from './DocumentToCreate.ts'

export type GetDocumentRequest = {
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
   * @description Document Type. Note \"Auto\" type is not acceptable in this method.
   */
  DocumentType: DocumentToCreate
  /**
   * @description Document Number
   * @type integer, int32
   */
  DocumentNumber: number
}