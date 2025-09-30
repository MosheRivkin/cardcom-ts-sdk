export const issuer: { readonly NonIsrael: "NonIsrael"; readonly Isracard: "Isracard"; readonly CAL: "CAL"; readonly Diners: "Diners"; readonly AmericanExpress: "AmericanExpress"; readonly JCB: "JCB"; readonly Laumicard: "Laumicard"; } = {
  NonIsrael: 'NonIsrael',
  Isracard: 'Isracard',
  CAL: 'CAL',
  Diners: 'Diners',
  AmericanExpress: 'AmericanExpress',
  JCB: 'JCB',
  Laumicard: 'Laumicard',
} as const

export type IssuerEnum = (typeof issuer)[keyof typeof issuer]

export type Issuer = IssuerEnum