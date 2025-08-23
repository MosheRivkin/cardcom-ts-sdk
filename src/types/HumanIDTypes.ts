export const humanIDTypes = {
  IDNumber: 'IDNumber',
  Passport: 'Passport',
} as const

export type HumanIDTypesEnum = (typeof humanIDTypes)[keyof typeof humanIDTypes]

export type HumanIDTypes = HumanIDTypesEnum