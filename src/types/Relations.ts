export const relations: { readonly AuthorizedSignature: "AuthorizedSignature"; readonly AuthorizedSignatureForeignResident: "AuthorizedSignatureForeignResident"; } = {
  AuthorizedSignature: 'AuthorizedSignature',
  AuthorizedSignatureForeignResident: 'AuthorizedSignatureForeignResident',
} as const

export type RelationsEnum = (typeof relations)[keyof typeof relations]

export type Relations = RelationsEnum