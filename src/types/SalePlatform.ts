export const salePlatform = {
  PhysicalSale: 'PhysicalSale',
  Phone: 'Phone',
  Web: 'Web',
  LandingPage: 'LandingPage',
} as const

export type SalePlatformEnum = (typeof salePlatform)[keyof typeof salePlatform]

export type SalePlatform = SalePlatformEnum