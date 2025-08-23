export type OpenNewCompanyResp = {
  /**
   * @type integer | undefined, int32
   */
  ResponseCode?: number
  /**
   * @type string
   */
  Description?: string | null
  /**
   * @type string, guid
   */
  CompanyInternalID?: string | null
  /**
   * @type integer, int32
   */
  TerminalNumber?: number | null
  /**
   * @type string
   */
  APIUserName?: string | null
  /**
   * @type string
   */
  APISecret?: string | null
  /**
   * @type array
   */
  ModulesList?: string[] | null
  /**
   * @type string
   */
  UpayAPIKey?: string | null
  /**
   * @type boolean | undefined
   */
  ShowErrorToEndUser?: boolean
  /**
   * @type string
   */
  CardComSapakNumber?: string | null
}