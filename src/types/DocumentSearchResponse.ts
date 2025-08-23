import type { InvHeadLineDto } from './InvHeadLineDto.ts'

export type DocumentSearchResponse = {
  /**
   * @type integer | undefined, int32
   */
  ResponseCode?: number
  /**
   * @type string
   */
  Description?: string | null
  /**
   * @type array
   */
  Documents?: InvHeadLineDto[] | null
  /**
   * @type integer | undefined, int32
   */
  Page?: number
  /**
   * @type integer | undefined, int32
   */
  Count?: number
}