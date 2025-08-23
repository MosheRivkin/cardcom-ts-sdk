import type { SapakStatus } from './SapakStatus.ts'

export type MeagedSapakInfo = {
  /**
   * @type integer | undefined, int32
   */
  SapakNumber?: number
  /**
   * @type string | undefined
   */
  SapakStatus?: SapakStatus
}