export const TXNTypeEnum: { readonly Regular_1: 1; readonly Advanced_2: 2; readonly Immediate_3: 3; readonly Credit_6: 6; readonly DEBIT_7: 7; readonly Payments_8: 8; readonly IsraCredit_12: 12; readonly LOADING_17: 17; readonly Exchange_71: 71; readonly ExchangePayments_78: 78; } = {
  Regular_1: 1,
  Advanced_2: 2,
  Immediate_3: 3,
  Credit_6: 6,
  DEBIT_7: 7,
  Payments_8: 8,
  IsraCredit_12: 12,
  LOADING_17: 17,
  Exchange_71: 71,
  ExchangePayments_78: 78,
} as const

export type TXNTypeEnum = (typeof TXNTypeEnum)[keyof typeof TXNTypeEnum]

export type TXNType = TXNTypeEnum