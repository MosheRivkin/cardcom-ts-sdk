import type {
  CompanyOperationsValidateCompanyCreation200,
  CompanyOperationsValidateCompanyCreation400,
  CompanyOperationsValidateCompanyCreation401,
  CompanyOperationsValidateCompanyCreationMutationRequest,
  CompanyOperationsValidateCompanyCreationMutationResponse,
} from '../../types/CompanyOperationsValidateCompanyCreation.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { acquiredCompanyAccountWithDocumentsSchema } from '../acquired-company-account-with-documents-schema.ts'
import { rsContentSchema } from '../rs-content-schema.ts'

/**
 * @description successful request
 */
export const companyOperationsValidateCompanyCreation200Schema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").RSContent>, "passthrough"> = rsContentSchema as unknown as ToZod<CompanyOperationsValidateCompanyCreation200>

/**
 * @description Invalid request , see \'Description\' in response for more information
 */
export const companyOperationsValidateCompanyCreation400Schema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").RSContent>, "passthrough"> = rsContentSchema as unknown as ToZod<CompanyOperationsValidateCompanyCreation400>

/**
 * @description Invalid username
 */
export const companyOperationsValidateCompanyCreation401Schema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").RSContent>, "passthrough"> = rsContentSchema as unknown as ToZod<CompanyOperationsValidateCompanyCreation401>

export const companyOperationsValidateCompanyCreationMutationRequestSchema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodNullable<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").AcquiredCompanyAccountWithDocuments>, "passthrough">> =
  acquiredCompanyAccountWithDocumentsSchema.nullable() as unknown as ToZod<CompanyOperationsValidateCompanyCreationMutationRequest>

export const companyOperationsValidateCompanyCreationMutationResponseSchema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").RSContent>, "passthrough"> =
  companyOperationsValidateCompanyCreation200Schema as unknown as ToZod<CompanyOperationsValidateCompanyCreationMutationResponse>