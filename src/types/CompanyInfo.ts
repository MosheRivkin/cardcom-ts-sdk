import type { Citizenship } from './Citizenship.ts'
import type { ExtSlikaAggrement } from './ExtSlikaAggrement.ts'

export type CompanyInfo = {
  /**
   * @description Business Activity
   * @type string
   */
  Activity?: string | null
  /**
   * @description Id Business Number
   * @minLength 1
   * @type string
   */
  BusinessRegistrationNumber: string
  /**
   * @description Contact Name
   * @type string
   */
  ContactPerson?: string | null
  /**
   * @description Company email
   * @type string
   */
  Email?: string | null
  /**
   * @description Company name mandatory field
   * @minLength 1
   * @type string
   */
  Name: string
  /**
   * @description Fax
   * @type string
   */
  Fax?: string | null
  /**
   * @description Phone - mandatory if there is no mobile phone
   * @type string
   */
  PhoneNumber?: string | null
  /**
   * @description Mobile phone - mandatory if there is no phone number
   * @type string
   */
  MobilePhone?: string | null
  /**
   * @description Zip code
   * @type string
   */
  ZipCode?: string | null
  /**
   * @description Is vat free company (N.P.O)
   * @type boolean | undefined
   */
  IsVatFreeCompany?: boolean
  /**
   * @default "Israel"
   */
  Citizenship?: Citizenship
  /**
   * @type string, guid
   */
  CompanyInternalID?: string | null
  /**
   * @description Business name in English
   * @type string
   */
  NameEng?: string | null
  /**
   * @description City code - get list of cities from https://secure.cardcom.solutions/api/v11/CompanyOperations/GetCities
   * @type integer, int32
   */
  CityCode?: number | null
  /**
   * @description Street code - get list of streets from https://secure.cardcom.solutions/api/v11/CompanyOperations/GetStreets by city code
   * @type integer, int32
   */
  StreetCode?: number | null
  /**
   * @description House number
   * @type string
   */
  HouseNumber?: string | null
  /**
   * @description Website Address
   * @type string
   */
  WebSiteUrl?: string | null
  /**
   * @description Entrance
   * @minLength 0
   * @maxLength 10
   * @type string
   */
  Entrance?: string | null
  /**
   * @description Country - get list of Countries from https://secure.cardcom.solutions/api/v11/CompanyOperations/GetCountries  for example israel code 376\"
   * @type integer | undefined, int32
   */
  CountryCode?: number
  /**
   * @description Name legal corporation
   * @type string
   */
  NameLegalCorporation?: string | null
  /**
   * @description agreement number
   */
  AgreementInfo?: ExtSlikaAggrement | null
}