export const brand2 = {
  MasterCard_1: 'MasterCard_1',
  Visa_2: 'Visa_2',
  Diners_3: 'Diners_3',
  Amex_4: 'Amex_4',
  Isracard_5: 'Isracard_5',
} as const

export type Brand2Enum = (typeof brand2)[keyof typeof brand2]

export type Brand2 = Brand2Enum