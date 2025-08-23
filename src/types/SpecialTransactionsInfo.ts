export type SpecialTransactionsInfo = {
  /**
   * @description row Create Date
   * @type string | undefined, date-time
   */
  CreateDate?: string
  /**
   * @description Special transaction type
   * @type integer | undefined, int32
   */
  SpecialType?: number
  /**
   * @description Special transaction heb desctiption
   * @type string | undefined
   */
  SpecialTypeDesc?: string
  /**
   * @description sub code for transaction type
   * @type integer | undefined
   */
  SpecialTypeSubType?: number
  /**
   * @description transaction type and sub type info
   * @type string
   */
  Description?: string | null
  /**
   * @description Amount of this transaction
   * @type number, decimal
   */
  Amount?: number | null
  /**
   * @description Original Amount transaction
   * @type number, decimal
   */
  OriginlTranAmount?: number | null
  /**
   * @description ARN is Solek transaction Id, this is the original ARN and this transaction ARN
   * @type string
   */
  ARN?: string | null
  /**
   * @description UID is point of sale transaction Id, this is the original UID and this transaction UID
   * @type string
   */
  UID?: string | null
  /**
   * @description The Sapak that will get the Money
   * @type integer | undefined, int32
   */
  SapakNumber?: number
  /**
   * @description CardCom point of sale Id
   * @type integer, int64
   */
  TranzactionId?: number | null
  /**
   * @type string
   */
  Last4CardDigits?: string | null
  /**
   * @type boolean
   */
  MarkedAsRead?: boolean | null
  /**
   * @type integer
   */
  CurrencyISO?: number | null
  /**
   * @type string, guid
   */
  CardToken?: string | null
  /**
   * @description Original transaction date - when the card holder did the transaction
   * @type string, date-time
   */
  OriginlTranDate?: string | null
  /**
   * @description This transaction date
   * @type string, date-time
   */
  SpecialTranDate?: string | null
  /**
   * @description Mutav number in Meaged style work, information only
   * @type integer, int32
   */
  SapakMutavNumber?: number | null
}