export const reportCodesEnum: { readonly NewCardNumber_1: 1; readonly CardCanceled_2: 2; readonly ChargeBack_3: 3; readonly DealCanceledByCardOwner_4: 4; readonly ReactivateCard_5: 5; } = {
  NewCardNumber_1: 1,
  CardCanceled_2: 2,
  ChargeBack_3: 3,
  DealCanceledByCardOwner_4: 4,
  ReactivateCard_5: 5,
} as const

export type ReportCodesEnum = (typeof reportCodesEnum)[keyof typeof reportCodesEnum]

export type ReportCodes = ReportCodesEnum