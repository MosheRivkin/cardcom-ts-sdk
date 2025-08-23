/**
 * @description Custom field
 */
export type CustomField = {
  /**
   * @description Custom field id
   * @minLength 1
   * @maxLength 25
   * @type integer | undefined
   */
  Id?: number
  /**
   * @description Custom field value
   * @maxLength 50
   * @type string | undefined
   */
  Value?: string
}