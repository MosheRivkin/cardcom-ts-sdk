export const brand: { readonly PrivateCard: "PrivateCard"; readonly MasterCard: "MasterCard"; readonly Visa: "Visa"; readonly Maestro: "Maestro"; readonly AmericanExpress: "AmericanExpress"; readonly Isracard: "Isracard"; readonly JBC: "JBC"; readonly Discover: "Discover"; readonly Diners: "Diners"; } = {
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