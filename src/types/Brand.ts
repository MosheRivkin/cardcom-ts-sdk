export const brand = {
  PrivateCard: 'PrivateCard',
  MasterCard: 'MasterCard',
  Visa: 'Visa',
  Maestro: 'Maestro',
  AmericanExpress: 'AmericanExpress',
  Isracard: 'Isracard',
  JBC: 'JBC',
  Discover: 'Discover',
  Diners: 'Diners',
} as const

export type BrandEnum = (typeof brand)[keyof typeof brand]

export type Brand = BrandEnum