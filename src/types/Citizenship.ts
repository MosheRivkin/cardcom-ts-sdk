export const citizenship: { readonly Unknown: "Unknown"; readonly Israel: "Israel"; readonly Expatriate: "Expatriate"; readonly ResidentArea: "ResidentArea"; } = {
  Unknown: 'Unknown',
  Israel: 'Israel',
  Expatriate: 'Expatriate',
  ResidentArea: 'ResidentArea',
} as const

export type CitizenshipEnum = (typeof citizenship)[keyof typeof citizenship]

export type Citizenship = CitizenshipEnum