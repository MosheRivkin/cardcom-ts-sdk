export const cardInfo = {
  Israeli: 'Israeli',
  NonIsraeli: 'NonIsraeli',
  FuelCard: 'FuelCard',
  ImmediateChargeCard: 'ImmediateChargeCard',
  GiftCard: 'GiftCard',
} as const

export type CardInfoEnum = (typeof cardInfo)[keyof typeof cardInfo]

export type CardInfo = CardInfoEnum