/**
 * @description sum to corss , null for full document price
 */
export type CrossDocumentToList = {
  /**
   * @type integer | undefined, int32
   */
  DocNumber?: number
  /**
   * @type integer | undefined, int32
   */
  DocType?: number
  /**
   * @description sum to corss , null for full document price
   * @type number, decimal
   */
  PartialSumToCorss?: number | null
}