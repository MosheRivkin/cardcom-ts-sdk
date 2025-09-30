import type {
  CompanyOperationsValidateCompanyCreation200,
  CompanyOperationsValidateCompanyCreation400,
  CompanyOperationsValidateCompanyCreation401,
  CompanyOperationsValidateCompanyCreationMutationRequest,
  CompanyOperationsValidateCompanyCreationMutationResponse,
} from '../../types/CompanyOperationsValidateCompanyCreation.ts'
import type { ToZod } from '@kubb/plugin-zod/utils'
import { acquiredCompanyAccountWithDocumentsSchema } from '../acquired-company-account-with-documents-schema.ts'
import { rsContentSchema } from '../rs-content-schema.ts'

/**
 * @description successful request
 */
export const companyOperationsValidateCompanyCreation200Schema: import("zod").ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").RSContent>> = rsContentSchema as unknown as ToZod<CompanyOperationsValidateCompanyCreation200>

/**
 * @description Invalid request , see \'Description\' in response for more information
 */
export const companyOperationsValidateCompanyCreation400Schema: import("zod").ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").RSContent>> = rsContentSchema as unknown as ToZod<CompanyOperationsValidateCompanyCreation400>

/**
 * @description Invalid username
 */
export const companyOperationsValidateCompanyCreation401Schema: import("zod").ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").RSContent>> = rsContentSchema as unknown as ToZod<CompanyOperationsValidateCompanyCreation401>

export const companyOperationsValidateCompanyCreationMutationRequestSchema: import("zod").ZodNullable<import("zod").ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").AcquiredCompanyAccountWithDocuments>>> =
  acquiredCompanyAccountWithDocumentsSchema.nullable() as unknown as ToZod<CompanyOperationsValidateCompanyCreationMutationRequest>

export const companyOperationsValidateCompanyCreationMutationResponseSchema: import("zod").ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").RSContent>> =
  companyOperationsValidateCompanyCreation200Schema as unknown as ToZod<CompanyOperationsValidateCompanyCreationMutationResponse>