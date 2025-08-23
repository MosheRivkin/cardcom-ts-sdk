import type { CountriesISO } from './CountriesISO.ts'

export type CompanyOperationsGetCountriesQueryParams = {
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
export type CompanyOperationsGetCountries200 = CountriesISO[]

/**
 * @description Invalid username
 */
export type CompanyOperationsGetCountries401 = string

export type CompanyOperationsGetCountriesQueryResponse = CompanyOperationsGetCountries200

export type CompanyOperationsGetCountriesQuery = {
  Response: CompanyOperationsGetCountries200
  QueryParams: CompanyOperationsGetCountriesQueryParams
  Errors: CompanyOperationsGetCountries401
}