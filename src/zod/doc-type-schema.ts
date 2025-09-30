import type { DocType } from '../types/DocType.ts'
import type { ToZod } from '@kubb/plugin-zod/utils'
import { z } from 'zod'

export const docTypeSchema: z.ZodType<import("src/index").DocTypeEnum, unknown, z.core.$ZodTypeInternals<import("src/index").DocTypeEnum, unknown>> = z.enum([
  'Id',
  'Passport',
  'CertificateOfIncorporation',
  'BankConfirmationOrPhotocopyOfCheck',
  'AttorneysApprovalForAGovernmentCompany',
  'AuthorizedAsAuthorizedToSign',
  'AttorneysProtocolAuthorizedToSign',
  'BookkeepingAuthorization',
  'AnotherCertificateForAForeignResident',
  'LicenseWorkPermitCertificateForABusiness',
  'DeclarationOfBeneficiaries',
  'ADocumentIndicatingTheCorrectAddressOfTheCompany',
  'FaceToFaceRecognitionVideoFile',
]) as unknown as ToZod<DocType>