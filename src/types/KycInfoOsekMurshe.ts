export type KycInfoOsekMurshe = {
  /**
   * @description האם כתובת המגורים של הבעלים שונה מכתובת העסק
   * @type boolean
   */
  IsOwnerAddressDifferentFromBusinessAddress?: boolean | null
  /**
   * @description מספר הבית בכתובת המגורים של בעל בית העסק
   * @maxLength 10
   * @type string
   */
  BusinessOwnerHomeNumber?: string | null
  /**
   * @description כניסה בכתובת המגורים של בעל בית העסק
   * @maxLength 10
   * @type string
   */
  BusinessOwnerEntranceNumber?: string | null
  /**
   * @description קוד רחוב בכתובת המגורים של בעל בית העסק
   * @type integer, int32
   */
  BusinessOwnerStreetCode?: number | null
  /**
   * @description קוד עיר בכתובת המגורים של בעל בית העסק
   * @type integer, int32
   */
  BusinessOwnerCityCode?: number | null
  /**
   * @description מיקוד בכתובת המגורים של בעל בית העסק
   * @maxLength 250
   * @type string
   */
  BusinessOwnerZipCode?: string | null
  /**
   * @description שם משפחה של האם לפני הנישואין
   * @maxLength 50
   * @type string
   */
  MotherMaidenName?: string | null
}