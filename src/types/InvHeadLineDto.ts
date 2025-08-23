export type InvHeadLineDto = {
  /**
   * @type number | undefined, decimal
   */
  TotalNoVatNIS?: number
  /**
   * @type number | undefined, decimal
   */
  TotalIncludeVATNIS?: number
  /**
   * @type number | undefined, decimal
   */
  VATOnlyNIS?: number
  /**
   * @type number | undefined, decimal
   */
  TotalVatFreeNIS?: number
  /**
   * @type number | undefined, decimal
   */
  TotalNoVat?: number
  /**
   * @type number | undefined, decimal
   */
  TotalIncludeVAT?: number
  /**
   * @type number | undefined, decimal
   */
  VATOnly?: number
  /**
   * @type number | undefined, decimal
   */
  TotalVatFree?: number
  /**
   * @type number | undefined, decimal
   */
  ISORate?: number
  /**
   * @type string
   */
  Cust_City?: string | null
  /**
   * @type string
   */
  Cust_Addres_Line1?: string | null
  /**
   * @type string
   */
  Cust_Addres_Line2?: string | null
  /**
   * @type string
   */
  Cust_LinePH?: string | null
  /**
   * @type string
   */
  Cust_MobilePH?: string | null
  /**
   * @type string
   */
  Comp_ID?: string | null
  /**
   * @type string
   */
  Email?: string | null
  /**
   * @type string
   */
  Cust_Name?: string | null
  /**
   * @type string | undefined, date-time
   */
  InvoiceDateOnly?: string
  /**
   * @type string | undefined, date-time
   */
  InvoiceDate?: string
  /**
   * @type integer | undefined, int32
   */
  Invoice_Number?: number
  /**
   * @type integer | undefined, int32
   */
  InvoiceType?: number
  /**
   * @type integer | undefined, int32
   */
  Terminal_Number?: number
  /**
   * @type integer | undefined, int32
   */
  CoinID?: number
  /**
   * @type integer | undefined, int32
   */
  DepartmentID?: number
  /**
   * @type boolean | undefined
   */
  IsOpen?: boolean
  /**
   * @type string | undefined, date-time
   */
  ValueDate?: string
  /**
   * @type integer, int32
   */
  UserID?: number | null
  /**
   * @type integer, int32
   */
  Customer_Number?: number | null
  /**
   * @type integer, int32
   */
  group_number?: number | null
  /**
   * @type string
   */
  Languge?: string | null
  /**
   * @type string
   */
  UserComments?: string | null
  /**
   * @type number, decimal
   */
  Discount?: number | null
  /**
   * @type number, decimal
   */
  DiscountNIS?: number | null
  /**
   * @type boolean
   */
  ValidateItemsisPriceIncludeVat?: boolean | null
  /**
   * @type string
   */
  ExternalId?: string | null
  /**
   * @type integer, int32
   */
  ZReport?: number | null
  /**
   * @type string
   */
  Asmachta?: string | null
  /**
   * @type number | undefined, decimal
   */
  SumBeforeDiscountNIS?: number
  /**
   * @type number | undefined, decimal
   */
  TotalChashNIS?: number
  /**
   * @type number | undefined, decimal
   */
  TotalChequesNIS?: number
  /**
   * @type number | undefined, decimal
   */
  TotalCreditCardNIS?: number
  /**
   * @type number | undefined, decimal
   */
  TotalCustomeTransactionNIS?: number
  /**
   * @type number | undefined, decimal
   */
  TotalRicipientNIS?: number
  /**
   * @type number | undefined, decimal
   */
  TotalChash?: number
  /**
   * @type number | undefined, decimal
   */
  TotalCheques?: number
  /**
   * @type boolean | undefined
   */
  IsNegetive?: boolean
  /**
   * @type number | undefined, decimal
   */
  TotalCreditCard?: number
  /**
   * @type number | undefined, decimal
   */
  TotalCustomeTransaction?: number
  /**
   * @type number | undefined, decimal
   */
  TotalRicipient?: number
}