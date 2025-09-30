export const gender2Enum: { readonly Unknown: 0; readonly male: 1; readonly female: 2; } = {
  Unknown: 0,
  male: 1,
  female: 2,
} as const

export type Gender2Enum = (typeof gender2Enum)[keyof typeof gender2Enum]

export type Gender2 = Gender2Enum