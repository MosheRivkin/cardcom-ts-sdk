export const dealType = {
  Information: 'Information',
  Debit: 'Debit',
  Discharge: 'Discharge',
  ForcedCharge: 'ForcedCharge',
  CashBack: 'CashBack',
  CashTransaction: 'CashTransaction',
  Recurring: 'Recurring',
  BalanceQuery: 'BalanceQuery',
  Cancel: 'Cancel',
  Refund: 'Refund',
  Recharge: 'Recharge',
} as const

export type DealTypeEnum = (typeof dealType)[keyof typeof dealType]

export type DealType = DealTypeEnum