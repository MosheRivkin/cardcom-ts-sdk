export const salePlatform2Enum = {
  PhysicalSale: 0,
  Phone: 1,
  Web: 2,
  LandingPage: 3,
} as const

export type SalePlatform2Enum = (typeof salePlatform2Enum)[keyof typeof salePlatform2Enum]

export type SalePlatform2 = SalePlatform2Enum