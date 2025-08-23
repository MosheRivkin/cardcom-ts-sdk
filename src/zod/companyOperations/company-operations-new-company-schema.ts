import type {
  CompanyOperationsNewCompany200,
  CompanyOperationsNewCompany400,
  CompanyOperationsNewCompany401,
  CompanyOperationsNewCompanyMutationRequest,
  CompanyOperationsNewCompanyMutationResponse,
} from '../../types/CompanyOperationsNewCompany.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { acquiredCompanyAccountSchema } from '../acquired-company-account-schema.ts'
import { errorInfoSchema } from '../error-info-schema.ts'
import { openNewCompanyResponseSchema } from '../open-new-company-response-schema.ts'

/**
 * @description successful request
 */
export const companyOperationsNewCompany200Schema = openNewCompanyResponseSchema as unknown as ToZod<CompanyOperationsNewCompany200>

/**
 * @description Invalid request , see \'Description\' in response for more information
 */
export const companyOperationsNewCompany400Schema = errorInfoSchema.describe(
  'error information for non http status 200',
) as unknown as ToZod<CompanyOperationsNewCompany400>

/**
 * @description Invalid username
 */
export const companyOperationsNewCompany401Schema = errorInfoSchema.describe(
  'error information for non http status 200',
) as unknown as ToZod<CompanyOperationsNewCompany401>

export const companyOperationsNewCompanyMutationRequestSchema =
  acquiredCompanyAccountSchema.nullable() as unknown as ToZod<CompanyOperationsNewCompanyMutationRequest>

export const companyOperationsNewCompanyMutationResponseSchema =
  companyOperationsNewCompany200Schema as unknown as ToZod<CompanyOperationsNewCompanyMutationResponse>