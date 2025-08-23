export type PrepareDeviceRequest = {
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
  /**
   * @description Mobile device UUID
   * @minLength 1
   * @maxLength 50
   * @type string
   */
  DeviceUUID: string
  /**
   * @description Mobile device manufacturer
   * @maxLength 50
   * @type string
   */
  DeviceManufacturer?: string | null
  /**
   * @description Mobile device model
   * @maxLength 50
   * @type string
   */
  DeviceModel?: string | null
}