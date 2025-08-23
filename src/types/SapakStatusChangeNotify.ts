import type { SapakStatus } from './SapakStatus.ts'

export type SapakStatusChangeNotify = {
  /**
   * @type integer | undefined, int32
   */
  SapakNumber?: number
  /**
   * @type string | undefined
   */
  SapakStatus?: SapakStatus
}