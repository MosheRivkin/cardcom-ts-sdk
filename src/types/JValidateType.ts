export const jValidateTypeEnum: { readonly J2: 2; readonly J5: 5; } = {
  J2: 2,
  J5: 5,
} as const

export type JValidateTypeEnum = (typeof jValidateTypeEnum)[keyof typeof jValidateTypeEnum]

export type JValidateType = JValidateTypeEnum