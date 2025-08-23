import type { MeagedSapakInfo } from './MeagedSapakInfo.ts'

export type MeagedGetCompanyInfoResponse = {
  /**
   * @description if equel zero then success , else , a develper error see Description for more info
   * @type integer | undefined, int32
   */
  ResponseCode?: number
  /**
   * @description Description of the ResponseCode
   * @type string
   */
  Description?: string | null
  /**
   * @type array
   */
  MeagedSapakInfo?: MeagedSapakInfo[] | null
}