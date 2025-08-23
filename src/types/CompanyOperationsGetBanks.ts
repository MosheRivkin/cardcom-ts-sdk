import type { Banks } from './Banks.ts'

export type CompanyOperationsGetBanksQueryParams = {
  /**
   * @type string
   */
  SupplierUserName: string | null
  /**
   * @type string
   */
  secret: string | null
}

/**
 * @description successful request
 */
export type CompanyOperationsGetBanks200 = Banks[]

/**
 * @description Invalid username
 */
export type CompanyOperationsGetBanks401 = string

export type CompanyOperationsGetBanksQueryResponse = CompanyOperationsGetBanks200

export type CompanyOperationsGetBanksQuery = {
  Response: CompanyOperationsGetBanks200
  QueryParams: CompanyOperationsGetBanksQueryParams
  Errors: CompanyOperationsGetBanks401
}