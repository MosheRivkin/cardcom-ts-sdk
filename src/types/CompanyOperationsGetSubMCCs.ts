import type { MCCDBs } from './MCCDBs.ts'

export type CompanyOperationsGetSubMCCsQueryParams = {
  /**
   * @type string
   */
  SupplierUserName: string | null
  /**
   * @type string
   */
  secret: string | null
  /**
   * @type integer
   */
  mccCode: number
}

/**
 * @description successful request
 */
export type CompanyOperationsGetSubMCCs200 = MCCDBs[]

/**
 * @description Invalid username
 */
export type CompanyOperationsGetSubMCCs401 = string

export type CompanyOperationsGetSubMCCsQueryResponse = CompanyOperationsGetSubMCCs200

export type CompanyOperationsGetSubMCCsQuery = {
  Response: CompanyOperationsGetSubMCCs200
  QueryParams: CompanyOperationsGetSubMCCsQueryParams
  Errors: CompanyOperationsGetSubMCCs401
}