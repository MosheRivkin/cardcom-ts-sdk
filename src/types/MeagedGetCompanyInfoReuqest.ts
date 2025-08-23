export type MeagedGetCompanyInfoReuqest = {
  /**
   * @description Supplier User Name
   * @minLength 1
   * @type string
   */
  SupplierUserName: string
  /**
   * @description Supplier Secret
   * @minLength 1
   * @type string
   */
  Secret: string
  /**
   * @type integer, int64
   */
  BusinessRegistrationNumber?: number | null
  /**
   * @type integer, int32
   */
  SapakNumber?: number | null
}