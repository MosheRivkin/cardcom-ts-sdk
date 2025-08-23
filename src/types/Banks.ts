import type { BanksBranches } from './BanksBranches.ts'

export type Banks = {
  /**
   * @type integer | undefined, int32
   */
  Bank_Code?: number
  /**
   * @type string
   */
  Bank_Name?: string | null
  /**
   * @type boolean | undefined
   */
  IsMasavDigitalVerificationSupported?: boolean
  /**
   * @type array
   */
  BanksBranches?: BanksBranches[] | null
}