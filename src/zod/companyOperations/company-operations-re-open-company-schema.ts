import type {
  CompanyOperationsReOpenCompany200,
  CompanyOperationsReOpenCompany400,
  CompanyOperationsReOpenCompany401,
  CompanyOperationsReOpenCompanyMutationRequest,
  CompanyOperationsReOpenCompanyMutationResponse,
} from '../../types/CompanyOperationsReOpenCompany.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { acquiredCompanyAccountSchema } from '../acquired-company-account-schema.ts'
import { errorInfoSchema } from '../error-info-schema.ts'
import { openNewCompanyResponseSchema } from '../open-new-company-response-schema.ts'

/**
 * @description successful request
 */
export const companyOperationsReOpenCompany200Schema = openNewCompanyResponseSchema as unknown as ToZod<CompanyOperationsReOpenCompany200>

/**
 * @description Invalid request , see \'Description\' in response for more information
 */
export const companyOperationsReOpenCompany400Schema = errorInfoSchema.describe(
  'error information for non http status 200',
) as unknown as ToZod<CompanyOperationsReOpenCompany400>

/**
 * @description Invalid username
 */
export const companyOperationsReOpenCompany401Schema = errorInfoSchema.describe(
  'error information for non http status 200',
) as unknown as ToZod<CompanyOperationsReOpenCompany401>

export const companyOperationsReOpenCompanyMutationRequestSchema =
  acquiredCompanyAccountSchema.nullable() as unknown as ToZod<CompanyOperationsReOpenCompanyMutationRequest>

export const companyOperationsReOpenCompanyMutationResponseSchema =
  companyOperationsReOpenCompany200Schema as unknown as ToZod<CompanyOperationsReOpenCompanyMutationResponse>