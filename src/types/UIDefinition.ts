import type { CustomField } from './CustomField.ts'
import type { GooglePayBtnDesign } from './GooglePayBtnDesign.ts'

/**
 * @description UI Definition for the created page
 */
export type UIDefinition = {
  /**
   * @description Hide card Owner name
   * @default false
   * @type boolean
   */
  IsHideCardOwnerName?: boolean | null
  /**
   * @description Fill the value of CardOwnerName input box
   * @maxLength 50
   * @default ""
   * @type string
   */
  CardOwnerNameValue?: string | null
  /**
   * @description Card onwer Id aka teudat zeut
   * @default ""
   * @type string
   */
  CardOwnerIdValue?: string | null
  /**
   * @description Hide card owner phone number
   * @default false
   * @type boolean
   */
  IsHideCardOwnerPhone?: boolean | null
  /**
   * @description Fill the value of CardOwnerPhone input box
   * @maxLength 50
   * @type string
   */
  CardOwnerPhoneValue?: string | null
  /**
   * @description Is CardOwnerPhone input box required
   * @default true
   * @type boolean
   */
  IsCardOwnerPhoneRequired?: boolean | null
  /**
   * @description fill the value of card owner email
   * @maxLength 50
   * @type string
   */
  CardOwnerEmailValue?: string | null
  /**
   * @description Hide card owner email
   * @default false
   * @type boolean
   */
  IsHideCardOwnerEmail?: boolean | null
  /**
   * @description Is card owner email input box required
   * @default true
   * @type boolean
   */
  IsCardOwnerEmailRequired?: boolean | null
  /**
   * @description Hide card ownder identity number
   * @default false
   * @type boolean
   */
  IsHideCardOwnerIdentityNumber?: boolean | null
  /**
   * @description Hide card number CVV
   * @default false
   * @type boolean
   */
  IsHideCVV?: boolean | null
  /**
   * @description Full URL address of CSS file. it will be injected to page, required CardCom premition (http(s)://site.com/file.css)
   * @maxLength 250
   * @type string
   */
  CSSUrl?: string | null
  /**
   * @description Fill the value of CustomFields input box by Field Id
   * @type array
   */
  CustomFields?: CustomField[] | null
  /**
   * @description Set how the Google Pay button will appear
   */
  GooglePayBtnDesign?: GooglePayBtnDesign | null
}