export const jValidateTypeEnum = {
  J2: 2,
  J5: 5,
} as const

export type JValidateTypeEnum = (typeof jValidateTypeEnum)[keyof typeof jValidateTypeEnum]

export type JValidateType = JValidateTypeEnum