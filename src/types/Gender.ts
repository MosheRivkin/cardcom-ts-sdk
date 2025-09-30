export const gender: { readonly Unknown: "Unknown"; readonly male: "male"; readonly female: "female"; } = {
  Unknown: 'Unknown',
  male: 'male',
  female: 'female',
} as const

export type GenderEnum = (typeof gender)[keyof typeof gender]

export type Gender = GenderEnum