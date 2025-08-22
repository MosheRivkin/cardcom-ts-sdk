import type { KycInfoGeneric } from "../types/KycInfoGeneric.ts";
import type { ToZod } from "@kubb/plugin-zod/utils/v4";
import { expectedStoreSupplyDeliveryScheduleSchema } from "./expected-store-supply-delivery-schedule-schema.ts";
import { salePlatform2Schema } from "./sale-platform2-schema.ts";
import { salePlatformSchema } from "./sale-platform-schema.ts";
import { typeOfRecruitmentSchema } from "./type-of-recruitment-schema.ts";
import { z } from "zod";

export const kycInfoGenericSchema = z.object({
      "CountriesTargetedMarket": z.string().max(250).describe("טקסט חופשי עד 250 תווים, עבור איזה מדינות המוצר מיועד").nullable().nullish(),
  "NamesOfRelatedBusinesses": z.string().max(250).describe("טקסט חופשי עד 250 תווים, רשימת העסקים הקשורים – המשך לשדה הקודם במידה וסימנו בו TRUE").nullable().nullish(),
  "ExpectedPercentagePaymentOfOnePayment": z.number().describe("אחוז עיסקאות צפוי של תשלום אחד").nullable().nullish(),
  "ExpectedPercentageOfPaymentTransactions": z.number().describe("אחוז עיסקאות צפוי של עיסקאות תשלומים").nullable().nullish(),
  "ExpectedPercentageOfCreditPaymentTransactions": z.number().describe("אחוז עיסקאות צפוי של תשלומי קרדיט").nullable().nullish(),
  "ExpectedPercentageOfTouristTransactions": z.number().describe("אחוז עיסקאות צפוי של עיסקאות תייר").nullable().nullish(),
  "ExpectedPaymentNumberForAverageTransaction": z.int().describe("הצפי לעיסקה ממוצעת מבחינת מספר תשלומים. שדה שמקבל מספר שלם").nullable().nullish(),
  get SalePlatform(){
                  return salePlatformSchema.describe("באיזה פלטפורמה המכירה צפויה להתבצע - לא בשימוש\r\nשדה שמקבל מספר שלם\r\n").nullable().nullish()
                },
  get SalePlatforms(){
                  return z.array(salePlatform2Schema).describe("באיזה פלטפורמה המכירה צפויה להתבצע - לא בשימוש\r\nשדה שמקבל מספר שלם\r\n").nullable().nullish()
                },
  "IsPaymentsFacilitator": z.boolean().describe("ריכוז חיובים של ספקים אחרים – האם הלקוח הוא לקוח מאגד").nullable().nullish(),
  "IsBusinessFacilitateCashWithdrawls": z.boolean().describe("האם הלקוח מאפשר משיכת מזומן בקופה?").nullable().nullish(),
  "IsBusinessFacilitateVoucherOrRechargingCardsSales": z.boolean().describe("האם הלקוח מאפשר מכירת שוברים/כרטיסים נטענים/כרטיסי מתנה?").nullable().nullish(),
  "IsBusinessFacilitateCreditForTransactionsOutsideBusinessScope": z.boolean().describe("האם הלקוח נותן אשראי שלא למטרת קנייה בחנות?").nullable().nullish(),
  "IsBusinessPlaceCashRegistersInOtherBusinesses": z.boolean().describe("הצבת קופות בבתי עסק אחרים?").nullable().nullish(),
  "TypeOfPlannedService": z.string().max(250).describe("מה הוא סוג השירות המתוכנן?").nullable().nullish(),
  "MinimumAmountOfCreditTransaction": z.int().describe("מהו הסכום המינימלי לעיסקה בכרטיס אשראי?").nullable().nullish(),
  "MaximumAmountOfCreditTransaction": z.int().describe("מהו הסכום המקסימלי לעיסקה בכרטיס אשראי? ").nullable().nullish(),
  "IsTheBusinessSeasonal": z.boolean().describe("האם העסק בעיקר פועל בעונה מסויימת של השנה?").nullable().nullish(),
  "IsTheBusinessPreviouslyClearedCreditCards": z.boolean().describe("האם העסק סלק בעבר כרטיסי אשראי ?").nullable().nullish(),
  "NumberOfYearsBusinessHasInClrearance": z.int().describe("כמה שנות ניסיון יש לעסק בתחום הסליקה?").nullable().nullish(),
  get ExpectedStoreSupplyDeliverySchedule(){
                  return expectedStoreSupplyDeliveryScheduleSchema.describe("משך זמן האספקה הצפוי למוצרי החנות?").nullable().nullish()
                },
  "TimeTillProductShips": z.int().describe("משך זמן האספקה הצפוי למשלוח?").nullable().nullish(),
  "AvarageTransactionAmountInCreditCard": z.int().describe("מהו הסכום הממוצע לעיסקה בכרטיס אשראי? ").nullable().nullish(),
  "EstimatedMonthlyTransactionAmount": z.int().describe("מספר עסקאות חודשי משוער").nullable().nullish(),
  "IsBusinessBeenDeniedActionVersusBankingCorporation": z.boolean().describe("האם בית עסק סורב בעבר לפעילות אל מול תאגיד בנקאי").nullable().nullish(),
  "GeneralBusinessFieldMccCode": z.int().describe("תחום עיסוק כללי").nullable().nullish(),
  "SpecifiedBusinessFieldMccCode": z.int().describe("תחום עיסוק מפורט").nullable().nullish(),
  get TypeOfRecruitment(){
                  return typeOfRecruitmentSchema.describe("דרך הגיוס").nullable().nullish()
                }
      }) as unknown as ToZod<KycInfoGeneric>