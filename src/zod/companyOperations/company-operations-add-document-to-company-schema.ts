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
export const companyOperationsAddDocumentToCompany200Schema = openNewCompanyResponseSchema as unknown as ToZod<CompanyOperationsAddDocumentToCompany200>

/**
 * @description Invalid request , see \'Description\' in response for more information
 */
export const companyOperationsAddDocumentToCompany400Schema = errorInfoSchema.describe(
  'error information for non http status 200',
) as unknown as ToZod<CompanyOperationsAddDocumentToCompany400>

/**
 * @description Invalid username
 */
export const companyOperationsAddDocumentToCompany401Schema = errorInfoSchema.describe(
  'error information for non http status 200',
) as unknown as ToZod<CompanyOperationsAddDocumentToCompany401>

export const companyOperationsAddDocumentToCompanyMutationRequestSchema =
  acquiredCompanyAccountFileUploadSchema.nullable() as unknown as ToZod<CompanyOperationsAddDocumentToCompanyMutationRequest>

export const companyOperationsAddDocumentToCompanyMutationResponseSchema =
  companyOperationsAddDocumentToCompany200Schema as unknown as ToZod<CompanyOperationsAddDocumentToCompanyMutationResponse>