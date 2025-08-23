export type GetDevicesRequest = {
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
   * @description Terminal number at Cardcom
   * @type integer, int32
   */
  TerminalNumber: number
}