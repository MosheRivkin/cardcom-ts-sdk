export type MuhlafimByDateRequest = {
  /**
   * @description API username
   * @minLength 1
   * @type string
   */
  apiUserName: string
  /**
   * @description API password
   * @minLength 1
   * @type string
   */
  apiPassword: string
  /**
   * @description DateTime from
   * @minLength 1
   * @type string, date-time
   */
  fromDate: string
  /**
   * @description DateTime to
   * @minLength 1
   * @type string, date-time
   */
  toDate: string
}