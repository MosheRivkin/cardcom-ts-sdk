export type MeagedCompanyInfo = {
  /**
   * @type integer, int64
   */
  BusinessRegistrationNumber: number
  /**
   * @description Legal Corporation name
   * @minLength 1
   * @type string
   */
  NameLegalCorporation: string
  /**
   * @description Legal Corporation name in english
   * @minLength 1
   * @type string
   */
  NameLegalCorporationEng: string
  /**
   * @minLength 1
   * @type string
   */
  Email: string
  /**
   * @description Company name that will show to the card hulder (if different from Leagal Name)
   * @type string
   */
  AdvertisingSapakName?: string | null
  /**
   * @description Company name that will show to the card hulder (if different from Leagal Name) in english
   * @type string
   */
  AdvertisingSapakEngName?: string | null
  /**
   * @minLength 1
   * @type string
   */
  PhoneNumber1: string
  /**
   * @type string
   */
  PhoneNumber2?: string | null
  /**
   * @minLength 1
   * @type string
   */
  ZipCode: string
  /**
   * @type integer, int32
   */
  CityCode: number
  /**
   * @type integer, int32
   */
  StreetCode: number
  /**
   * @type string
   */
  HouseNumber?: string | null
}