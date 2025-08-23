import type { DocumentBase } from './DocumentBase.ts'

export type DocumentLP = DocumentBase & {
  /**
   * @description Allow the card owner to edit the \"document\" information: To, address, phone... (not the products and amount) , default = false
   * @default false
   * @type boolean
   */
  IsAllowEditDocument?: boolean | null
  /**
   * @description Will only show the document information to the card owner. NO DOCCUMENT WILL BE CREATED. default = false (system will create a document)
   * @default false
   * @type boolean
   */
  IsShowOnlyDocument?: boolean | null
  /**
   * @description The language of the document to be created.
   * @default "he"
   * @type string
   */
  Language?: string | null
}