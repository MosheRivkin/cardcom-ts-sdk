export const dealType: { readonly Information: "Information"; readonly Debit: "Debit"; readonly Discharge: "Discharge"; readonly ForcedCharge: "ForcedCharge"; readonly CashBack: "CashBack"; readonly CashTransaction: "CashTransaction"; readonly Recurring: "Recurring"; readonly BalanceQuery: "BalanceQuery"; readonly Cancel: "Cancel"; readonly Refund: "Refund"; readonly Recharge: "Recharge"; } = {
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