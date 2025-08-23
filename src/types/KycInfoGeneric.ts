import type { ExpectedStoreSupplyDeliverySchedule } from './ExpectedStoreSupplyDeliverySchedule.ts'
import type { SalePlatform2 } from './SalePlatform2.ts'
import type { SalePlatform } from './SalePlatform.ts'
import type { TypeOfRecruitment } from './TypeOfRecruitment.ts'

export type KycInfoGeneric = {
  /**
   * @description טקסט חופשי עד 250 תווים, עבור איזה מדינות המוצר מיועד
   * @maxLength 250
   * @type string
   */
  CountriesTargetedMarket?: string | null
  /**
   * @description טקסט חופשי עד 250 תווים, רשימת העסקים הקשורים – המשך לשדה הקודם במידה וסימנו בו TRUE
   * @maxLength 250
   * @type string
   */
  NamesOfRelatedBusinesses?: string | null
  /**
   * @description אחוז עיסקאות צפוי של תשלום אחד
   * @type number, decimal
   */
  ExpectedPercentagePaymentOfOnePayment?: number | null
  /**
   * @description אחוז עיסקאות צפוי של עיסקאות תשלומים
   * @type number, decimal
   */
  ExpectedPercentageOfPaymentTransactions?: number | null
  /**
   * @description אחוז עיסקאות צפוי של תשלומי קרדיט
   * @type number, decimal
   */
  ExpectedPercentageOfCreditPaymentTransactions?: number | null
  /**
   * @description אחוז עיסקאות צפוי של עיסקאות תייר
   * @type number, decimal
   */
  ExpectedPercentageOfTouristTransactions?: number | null
  /**
   * @description הצפי לעיסקה ממוצעת מבחינת מספר תשלומים. שדה שמקבל מספר שלם
   * @type integer
   */
  ExpectedPaymentNumberForAverageTransaction?: number | null
  /**
   * @description באיזה פלטפורמה המכירה צפויה להתבצע - לא בשימוש\r\nשדה שמקבל מספר שלם\r\n
   */
  SalePlatform?: SalePlatform | null
  /**
   * @description באיזה פלטפורמה המכירה צפויה להתבצע - לא בשימוש\r\nשדה שמקבל מספר שלם\r\n
   * @type array
   */
  SalePlatforms?: SalePlatform2[] | null
  /**
   * @description ריכוז חיובים של ספקים אחרים – האם הלקוח הוא לקוח מאגד
   * @type boolean
   */
  IsPaymentsFacilitator?: boolean | null
  /**
   * @description האם הלקוח מאפשר משיכת מזומן בקופה?
   * @type boolean
   */
  IsBusinessFacilitateCashWithdrawls?: boolean | null
  /**
   * @description האם הלקוח מאפשר מכירת שוברים/כרטיסים נטענים/כרטיסי מתנה?
   * @type boolean
   */
  IsBusinessFacilitateVoucherOrRechargingCardsSales?: boolean | null
  /**
   * @description האם הלקוח נותן אשראי שלא למטרת קנייה בחנות?
   * @type boolean
   */
  IsBusinessFacilitateCreditForTransactionsOutsideBusinessScope?: boolean | null
  /**
   * @description הצבת קופות בבתי עסק אחרים?
   * @type boolean
   */
  IsBusinessPlaceCashRegistersInOtherBusinesses?: boolean | null
  /**
   * @description מה הוא סוג השירות המתוכנן?
   * @maxLength 250
   * @type string
   */
  TypeOfPlannedService?: string | null
  /**
   * @description מהו הסכום המינימלי לעיסקה בכרטיס אשראי?
   * @type integer, int32
   */
  MinimumAmountOfCreditTransaction?: number | null
  /**
   * @description מהו הסכום המקסימלי לעיסקה בכרטיס אשראי?
   * @type integer, int32
   */
  MaximumAmountOfCreditTransaction?: number | null
  /**
   * @description האם העסק בעיקר פועל בעונה מסויימת של השנה?
   * @type boolean
   */
  IsTheBusinessSeasonal?: boolean | null
  /**
   * @description האם העסק סלק בעבר כרטיסי אשראי ?
   * @type boolean
   */
  IsTheBusinessPreviouslyClearedCreditCards?: boolean | null
  /**
   * @description כמה שנות ניסיון יש לעסק בתחום הסליקה?
   * @type integer
   */
  NumberOfYearsBusinessHasInClrearance?: number | null
  /**
   * @description משך זמן האספקה הצפוי למוצרי החנות?
   */
  ExpectedStoreSupplyDeliverySchedule?: ExpectedStoreSupplyDeliverySchedule | null
  /**
   * @description משך זמן האספקה הצפוי למשלוח?
   * @type integer
   */
  TimeTillProductShips?: number | null
  /**
   * @description מהו הסכום הממוצע לעיסקה בכרטיס אשראי?
   * @type integer, int32
   */
  AvarageTransactionAmountInCreditCard?: number | null
  /**
   * @description מספר עסקאות חודשי משוער
   * @type integer, int32
   */
  EstimatedMonthlyTransactionAmount?: number | null
  /**
   * @description האם בית עסק סורב בעבר לפעילות אל מול תאגיד בנקאי
   * @type boolean
   */
  IsBusinessBeenDeniedActionVersusBankingCorporation?: boolean | null
  /**
   * @description תחום עיסוק כללי
   * @type integer, int32
   */
  GeneralBusinessFieldMccCode?: number | null
  /**
   * @description תחום עיסוק מפורט
   * @type integer, int32
   */
  SpecifiedBusinessFieldMccCode?: number | null
  /**
   * @description דרך הגיוס
   */
  TypeOfRecruitment?: TypeOfRecruitment | null
}