export const salePlatform2Enum: { readonly PhysicalSale: 0; readonly Phone: 1; readonly Web: 2; readonly LandingPage: 3; } = {
  PhysicalSale: 0,
  Phone: 1,
  Web: 2,
  LandingPage: 3,
} as const

export type SalePlatform2Enum = (typeof salePlatform2Enum)[keyof typeof salePlatform2Enum]

export type SalePlatform2 = SalePlatform2Enum