export type SendAllDocumentsToEmailRequest = {
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
   * @description Send to email
   * @minLength 1
   * @type string
   */
  EmailTo: string
  /**
   * @description from date
   * @minLength 1
   * @type string
   */
  FromDateYYYYMMDD: string
  /**
   * @description to date
   * @minLength 1
   * @type string
   */
  ToDateYYYYMMDD: string
  /**
   * @description send empty email if no documents were found
   * @default false
   * @type boolean
   */
  SendEmptyEmail?: boolean | null
  /**
   * @description add original on the document
   * @default false
   * @type boolean
   */
  ForceOriginal?: boolean | null
  /**
   * @description document type to send , null or -1 for all , else the doc id
   * @default -1
   * @type integer, int32
   */
  DocumentType?: number | null
}