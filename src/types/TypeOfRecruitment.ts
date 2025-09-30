export const typeOfRecruitment: { readonly Independent: "Independent"; readonly Telephone: "Telephone"; readonly UsingARemoteRepresentative: "UsingARemoteRepresentative"; } = {
  Independent: 'Independent',
  Telephone: 'Telephone',
  UsingARemoteRepresentative: 'UsingARemoteRepresentative',
} as const

export type TypeOfRecruitmentEnum = (typeof typeOfRecruitment)[keyof typeof typeOfRecruitment]

export type TypeOfRecruitment = TypeOfRecruitmentEnum