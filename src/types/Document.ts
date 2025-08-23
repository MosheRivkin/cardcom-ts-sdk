import type { DocumentBase } from './DocumentBase.ts'
import type { DocumentToCreate } from './DocumentToCreate.ts'

export type Document = DocumentBase & {
  /**
   * @type string
   */
  ManualNumber?: string | null
  /**
   * @type string
   */
  DocumentDate?: string | null
  /**
   * @type string
   */
  ValueDate?: string | null
  /**
   * @description ISOCoinID. 1=ILS, 2=USD, the rest as described in ISO. Default is 1
   * @type integer | undefined, int32
   */
  ISOCoinID?: number
  /**
   * @description ISOCoinName as described in ISO. if ISOCoinID is provided this property is not needed.
   * @type string
   */
  ISOCoinName?: string | null
  /**
   * @description Language. \'he\' or \'en\'. Default is he. When providing AccountID the account language will override this property.
   * @type string
   */
  Languge?: string | null
  /**
   * @description The type of the document
   */
  DocumentTypeToCreate: DocumentToCreate
}