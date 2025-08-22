import type { CompanyOperationsValidateCompanyCreation200, CompanyOperationsValidateCompanyCreation400, CompanyOperationsValidateCompanyCreation401, CompanyOperationsValidateCompanyCreationMutationRequest, CompanyOperationsValidateCompanyCreationMutationResponse } from "../../types/CompanyOperationsValidateCompanyCreation.ts";
import type { ToZod } from "@kubb/plugin-zod/utils/v4";
import { acquiredCompanyAccountWithDocumentsSchema } from "../acquired-company-account-with-documents-schema.ts";
import { rsContentSchema } from "../rs-content-schema.ts";

/**
 * @description successful request
 */
export const companyOperationsValidateCompanyCreation200Schema = rsContentSchema as unknown as ToZod<CompanyOperationsValidateCompanyCreation200>

/**
 * @description Invalid request , see \'Description\' in response for more information
 */
export const companyOperationsValidateCompanyCreation400Schema = rsContentSchema as unknown as ToZod<CompanyOperationsValidateCompanyCreation400>

/**
 * @description Invalid username
 */
export const companyOperationsValidateCompanyCreation401Schema = rsContentSchema as unknown as ToZod<CompanyOperationsValidateCompanyCreation401>

export const companyOperationsValidateCompanyCreationMutationRequestSchema = acquiredCompanyAccountWithDocumentsSchema.nullable() as unknown as ToZod<CompanyOperationsValidateCompanyCreationMutationRequest>

export const companyOperationsValidateCompanyCreationMutationResponseSchema = companyOperationsValidateCompanyCreation200Schema as unknown as ToZod<CompanyOperationsValidateCompanyCreationMutationResponse>