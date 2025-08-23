import type { OpenNewCompanyResp } from './OpenNewCompanyResp.ts'

export type OpenNewCompanyResponse = OpenNewCompanyResp & {
  /**
   * @type string
   */
  CardComSapakNumber?: string | null
  /**
   * @type integer | undefined, int32
   */
  CompanyNumber?: number
}