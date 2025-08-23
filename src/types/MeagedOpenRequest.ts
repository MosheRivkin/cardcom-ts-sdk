import type { MeagedCompanyInfo } from './MeagedCompanyInfo.ts'
import type { MeagedKycInfo } from './MeagedKycInfo.ts'
import type { MeagedPeopleInfo } from './MeagedPeopleInfo.ts'

export type MeagedOpenRequest = {
  /**
   * @description Do only validation for the recquest and do not open a new company! for Dev-test only
   * @type boolean
   */
  IsValidationOnly: boolean
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
   * @type object
   */
  CompnayInfo: MeagedCompanyInfo
  /**
   * @type array
   */
  PeopleInfo: MeagedPeopleInfo[]
  /**
   * @type object
   */
  KycInfo: MeagedKycInfo
}