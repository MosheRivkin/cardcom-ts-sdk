export const docType: { readonly Id: "Id"; readonly Passport: "Passport"; readonly CertificateOfIncorporation: "CertificateOfIncorporation"; readonly BankConfirmationOrPhotocopyOfCheck: "BankConfirmationOrPhotocopyOfCheck"; readonly AttorneysApprovalForAGovernmentCompany: "AttorneysApprovalForAGovernmentCompany"; readonly AuthorizedAsAuthorizedToSign: "AuthorizedAsAuthorizedToSign"; readonly AttorneysProtocolAuthorizedToSign: "AttorneysProtocolAuthorizedToSign"; readonly BookkeepingAuthorization: "BookkeepingAuthorization"; readonly AnotherCertificateForAForeignResident: "AnotherCertificateForAForeignResident"; readonly LicenseWorkPermitCertificateForABusiness: "LicenseWorkPermitCertificateForABusiness"; readonly DeclarationOfBeneficiaries: "DeclarationOfBeneficiaries"; readonly ADocumentIndicatingTheCorrectAddressOfTheCompany: "ADocumentIndicatingTheCorrectAddressOfTheCompany"; readonly FaceToFaceRecognitionVideoFile: "FaceToFaceRecognitionVideoFile"; } = {
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