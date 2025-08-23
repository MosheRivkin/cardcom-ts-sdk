import type { InvExtHead } from './InvExtHead.ts'
import type { InvExtHeadLines } from './InvExtHeadLines.ts'
import type { RciExtCheque } from './RciExtCheque.ts'
import type { RciExtCustome } from './RciExtCustome.ts'
import type { RciExtDealNum } from './RciExtDealNum.ts'

export type CreateTaxInvoiceRequest = {
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
   * @description Invoice Type
   * @type integer | undefined, int32
   */
  InvoiceType?: number
  /**
   * @description Invoice header
   */
  InvoiceHead?: InvExtHead | null
  /**
   * @description Invoice lines
   * @type array
   */
  InvoiceLines?: InvExtHeadLines[] | null
  /**
   * @description Amount in cash
   * @type number | undefined, decimal
   */
  Cash?: number
  /**
   * @description Custom line
   * @type array
   */
  CustomLines?: RciExtCustome[] | null
  /**
   * @description Cheques
   * @type array
   */
  Cheques?: RciExtCheque[] | null
  /**
   * @description Deal Numbers
   * @type array
   */
  DealNumbers?: RciExtDealNum[] | null
}