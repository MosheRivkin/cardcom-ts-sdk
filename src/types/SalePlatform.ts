export const salePlatform: { readonly PhysicalSale: "PhysicalSale"; readonly Phone: "Phone"; readonly Web: "Web"; readonly LandingPage: "LandingPage"; } = {
  PhysicalSale: 'PhysicalSale',
  Phone: 'Phone',
  Web: 'Web',
  LandingPage: 'LandingPage',
} as const

export type SalePlatformEnum = (typeof salePlatform)[keyof typeof salePlatform]

export type SalePlatform = SalePlatformEnum