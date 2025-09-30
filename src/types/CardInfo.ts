export const cardInfo: { readonly Israeli: "Israeli"; readonly NonIsraeli: "NonIsraeli"; readonly FuelCard: "FuelCard"; readonly ImmediateChargeCard: "ImmediateChargeCard"; readonly GiftCard: "GiftCard"; } = {
  Israeli: 'Israeli',
  NonIsraeli: 'NonIsraeli',
  FuelCard: 'FuelCard',
  ImmediateChargeCard: 'ImmediateChargeCard',
  GiftCard: 'GiftCard',
} as const

export type CardInfoEnum = (typeof cardInfo)[keyof typeof cardInfo]

export type CardInfo = CardInfoEnum