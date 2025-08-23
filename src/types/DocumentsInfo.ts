import type { DocType } from './DocType.ts'

export type DocumentsInfo = {
  /**
   * @description Document Type
   */
  DocType: DocType
  /**
   * @description Name
   * @minLength 1
   * @type string
   */
  Name: string
  /**
   * @description Content
   * @minLength 1
   * @type string, byte
   */
  Content: string
}