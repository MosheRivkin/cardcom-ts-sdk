export const acquire: { readonly Unknown: "Unknown"; readonly Isracard: "Isracard"; readonly CAL: "CAL"; readonly Diners: "Diners"; readonly AmericanExpress: "AmericanExpress"; readonly Laumicard: "Laumicard"; readonly CardCom: "CardCom"; readonly PayPal: "PayPal"; readonly Upay: "Upay"; readonly PayMe: "PayMe"; } = {
  Unknown: 'Unknown',
  Isracard: 'Isracard',
  CAL: 'CAL',
  Diners: 'Diners',
  AmericanExpress: 'AmericanExpress',
  Laumicard: 'Laumicard',
  CardCom: 'CardCom',
  PayPal: 'PayPal',
  Upay: 'Upay',
  PayMe: 'PayMe',
} as const

export type AcquireEnum = (typeof acquire)[keyof typeof acquire]

export type Acquire = AcquireEnum