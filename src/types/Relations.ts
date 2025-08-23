export const relations = {
  AuthorizedSignature: 'AuthorizedSignature',
  AuthorizedSignatureForeignResident: 'AuthorizedSignatureForeignResident',
} as const

export type RelationsEnum = (typeof relations)[keyof typeof relations]

export type Relations = RelationsEnum