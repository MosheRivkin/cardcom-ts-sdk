import type { ConfigBool } from './ConfigBool.ts'

/**
 * @description Advanced document definition
 */
export type AdvancedDocumentDefinition = {
  /**
   * @description Is to Auto update or create an Account, default = auto, will automatically update from admin panel configuration \r\n במידה ולא מועבר יתבצע איתור לפי  מפתח זר ולאחר מכן לפי מזהה ייחודי אתר ואז לפי  EMAIL לקוח. (הפרמטר הראשון שנמצע בשרת מולצב ולא ממשיך לחפש עוד )\r\n
   * @default "auto"
   */
  IsAutoCreateUpdateAccount?: ConfigBool | null
  /**
   * @description The account number on a Foreign system, use for transfer to 3-party account system ( hashavshevet, SAP )
   * @maxLength 50
   * @type string
   */
  AccountForeignKey?: string | null
  /**
   * @description Your system unique Id for this account
   * @maxLength 50
   * @type string
   */
  SiteUniqueId?: string | null
  /**
   * @description Unique account ID in cardcom system, account must exist in CardCom system
   * @type integer, int32
   */
  AccountID?: number | null
  /**
   * @description If AccountID is passed, CardCom system will update the document information ( To ,HP_TZ, Email ...) from existing accounts information
   * @default false
   * @type boolean
   */
  IsLoadInfoFromAccountID?: boolean | null
}