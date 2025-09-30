import type {
  CompanyOperationsAddDocumentToCompany200,
  CompanyOperationsAddDocumentToCompany400,
  CompanyOperationsAddDocumentToCompany401,
  CompanyOperationsAddDocumentToCompanyMutationRequest,
  CompanyOperationsAddDocumentToCompanyMutationResponse,
} from '../../types/CompanyOperationsAddDocumentToCompany.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { acquiredCompanyAccountFileUploadSchema } from '../acquired-company-account-file-upload-schema.ts'
import { errorInfoSchema } from '../error-info-schema.ts'
import { openNewCompanyResponseSchema } from '../open-new-company-response-schema.ts'

/**
 * @description successful request
 */
export const companyOperationsAddDocumentToCompany200Schema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").OpenNewCompanyResponse>, "passthrough"> = openNewCompanyResponseSchema as unknown as ToZod<CompanyOperationsAddDocumentToCompany200>

/**
 * @description Invalid request , see \'Description\' in response for more information
 */
export const companyOperationsAddDocumentToCompany400Schema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").ErrorInfo>, "passthrough"> = errorInfoSchema.describe(
  'error information for non http status 200',
) as unknown as ToZod<CompanyOperationsAddDocumentToCompany400>

/**
 * @description Invalid username
 */
export const companyOperationsAddDocumentToCompany401Schema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").ErrorInfo>, "passthrough"> = errorInfoSchema.describe(
  'error information for non http status 200',
) as unknown as ToZod<CompanyOperationsAddDocumentToCompany401>

export const companyOperationsAddDocumentToCompanyMutationRequestSchema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodNullable<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").AcquiredCompanyAccountFileUpload>, "passthrough">> =
  acquiredCompanyAccountFileUploadSchema.nullable() as unknown as ToZod<CompanyOperationsAddDocumentToCompanyMutationRequest>

export const companyOperationsAddDocumentToCompanyMutationResponseSchema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").OpenNewCompanyResponse>, "passthrough"> =
  companyOperationsAddDocumentToCompany200Schema as unknown as ToZod<CompanyOperationsAddDocumentToCompanyMutationResponse>