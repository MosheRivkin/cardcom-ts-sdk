import type { DocType } from "../types/DocType.ts";
import type { ToZod } from "@kubb/plugin-zod/utils/v4";
import { z } from "zod";

export const docTypeSchema = z.enum(["Id", "Passport", "CertificateOfIncorporation", "BankConfirmationOrPhotocopyOfCheck", "AttorneysApprovalForAGovernmentCompany", "AuthorizedAsAuthorizedToSign", "AttorneysProtocolAuthorizedToSign", "BookkeepingAuthorization", "AnotherCertificateForAForeignResident", "LicenseWorkPermitCertificateForABusiness", "DeclarationOfBeneficiaries", "ADocumentIndicatingTheCorrectAddressOfTheCompany", "FaceToFaceRecognitionVideoFile"]) as unknown as ToZod<DocType>