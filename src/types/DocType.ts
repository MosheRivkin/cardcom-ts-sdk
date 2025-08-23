export const docType = {
  Id: 'Id',
  Passport: 'Passport',
  CertificateOfIncorporation: 'CertificateOfIncorporation',
  BankConfirmationOrPhotocopyOfCheck: 'BankConfirmationOrPhotocopyOfCheck',
  AttorneysApprovalForAGovernmentCompany: 'AttorneysApprovalForAGovernmentCompany',
  AuthorizedAsAuthorizedToSign: 'AuthorizedAsAuthorizedToSign',
  AttorneysProtocolAuthorizedToSign: 'AttorneysProtocolAuthorizedToSign',
  BookkeepingAuthorization: 'BookkeepingAuthorization',
  AnotherCertificateForAForeignResident: 'AnotherCertificateForAForeignResident',
  LicenseWorkPermitCertificateForABusiness: 'LicenseWorkPermitCertificateForABusiness',
  DeclarationOfBeneficiaries: 'DeclarationOfBeneficiaries',
  ADocumentIndicatingTheCorrectAddressOfTheCompany: 'ADocumentIndicatingTheCorrectAddressOfTheCompany',
  FaceToFaceRecognitionVideoFile: 'FaceToFaceRecognitionVideoFile',
} as const

export type DocTypeEnum = (typeof docType)[keyof typeof docType]

export type DocType = DocTypeEnum