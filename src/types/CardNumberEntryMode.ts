export const cardNumberEntryMode: { readonly MagneticStip: "MagneticStip"; readonly SelfService: "SelfService"; readonly GasStationSelfService: "GasStationSelfService"; readonly Contactless: "Contactless"; readonly EmvContactless: "EmvContactless"; readonly MobileContactless: "MobileContactless"; readonly EmvMobileContactless: "EmvMobileContactless"; readonly MobileNumber: "MobileNumber"; readonly Emv: "Emv"; readonly Phone: "Phone"; readonly SignatureOnly: "SignatureOnly"; readonly Internet: "Internet"; readonly Fallback: "Fallback"; readonly EmptyCandidateList: "EmptyCandidateList"; } = {
  MagneticStip: 'MagneticStip',
  SelfService: 'SelfService',
  GasStationSelfService: 'GasStationSelfService',
  Contactless: 'Contactless',
  EmvContactless: 'EmvContactless',
  MobileContactless: 'MobileContactless',
  EmvMobileContactless: 'EmvMobileContactless',
  MobileNumber: 'MobileNumber',
  Emv: 'Emv',
  Phone: 'Phone',
  SignatureOnly: 'SignatureOnly',
  Internet: 'Internet',
  Fallback: 'Fallback',
  EmptyCandidateList: 'EmptyCandidateList',
} as const

export type CardNumberEntryModeEnum = (typeof cardNumberEntryMode)[keyof typeof cardNumberEntryMode]

export type CardNumberEntryMode = CardNumberEntryModeEnum