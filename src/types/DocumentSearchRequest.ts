export type DocumentSearchRequest = {
  /**
   * @description Api Name for authentication
   * @minLength 1
   * @type string
   */
  ApiName: string
  /**
   * @description Api password for authentication
   * @minLength 1
   * @type string
   */
  ApiPassword: string
  /**
   * @description From date
   * @minLength 1
   * @type string
   */
  FromDateYYYYMMDD: string
  /**
   * @description To date
   * @minLength 1
   * @type string
   */
  ToDateYYYYMMDD: string
  /**
   * @description Account Id. Used to filter. Use AccountId OR CusotmerName
   * @type integer, int32
   */
  AccountId?: number | null
  /**
   * @description Customer Name. Used to filter. Use CusotmerName OR AccountId
   * @type string
   */
  CusotmerName?: string | null
  /**
   * @description Document Type: -1=All invoices. -2=All documents. -3=Refund only
   * @default -1
   * @type integer | undefined, int32
   */
  DocType?: number
  /**
   * @description Coin Id. 0=All coins. 1=ILS. 2=USD
   * @default 1
   * @type integer, int32
   */
  CoinId?: number | null
  /**
   * @description Open or closed documents: 0=all, 1=true, 2=false.
   * @default 0
   * @type integer | undefined, int32
   */
  OpenClose?: number
  /**
   * @description VAT free Docs Only
   * @default false
   * @type boolean | undefined
   */
  VatFreeDocOnly?: boolean
  /**
   * @description Pagination: page number. Default 1
   * @default 1
   * @type integer | undefined, int32
   */
  PageNumber?: number
  /**
   * @description Pagination: number of documents per page. Default 50. Maximum 200
   * @default 50
   * @type integer | undefined, int32
   */
  ItemsPerPage?: number
}