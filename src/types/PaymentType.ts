export const paymentType: { readonly Unknown: "Unknown"; readonly Standard: "Standard"; readonly SpecialCredits: "SpecialCredits"; readonly ImmediateCharge: "ImmediateCharge"; readonly CreditClub: "CreditClub"; readonly SuperCredit: "SuperCredit"; readonly InstallmentCredit: "InstallmentCredit"; readonly Payments: "Payments"; readonly ClubPatments: "ClubPatments"; } = {
  Unknown: 'Unknown',
  Standard: 'Standard',
  SpecialCredits: 'SpecialCredits',
  ImmediateCharge: 'ImmediateCharge',
  CreditClub: 'CreditClub',
  SuperCredit: 'SuperCredit',
  InstallmentCredit: 'InstallmentCredit',
  Payments: 'Payments',
  ClubPatments: 'ClubPatments',
} as const

export type PaymentTypeEnum = (typeof paymentType)[keyof typeof paymentType]

export type PaymentType = PaymentTypeEnum