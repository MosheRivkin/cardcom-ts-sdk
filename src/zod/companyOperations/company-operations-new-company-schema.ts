import type {
  CompanyOperationsNewCompany200,
  CompanyOperationsNewCompany400,
  CompanyOperationsNewCompany401,
  CompanyOperationsNewCompanyMutationRequest,
  CompanyOperationsNewCompanyMutationResponse,
} from '../../types/CompanyOperationsNewCompany.ts'
import type { ToZod } from '@kubb/plugin-zod/utils'
import { acquiredCompanyAccountSchema } from '../acquired-company-account-schema.ts'
import { errorInfoSchema } from '../error-info-schema.ts'
import { openNewCompanyResponseSchema } from '../open-new-company-response-schema.ts'

/**
 * @description successful request
 */
export const companyOperationsNewCompany200Schema: import("zod").ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").OpenNewCompanyResponse>> = openNewCompanyResponseSchema as unknown as ToZod<CompanyOperationsNewCompany200>

/**
 * @description Invalid request , see \'Description\' in response for more information
 */
export const companyOperationsNewCompany400Schema: import("zod").ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").ErrorInfo>> = errorInfoSchema.describe(
  'error information for non http status 200',
) as unknown as ToZod<CompanyOperationsNewCompany400>

/**
 * @description Invalid username
 */
export const companyOperationsNewCompany401Schema: import("zod").ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").ErrorInfo>> = errorInfoSchema.describe(
  'error information for non http status 200',
) as unknown as ToZod<CompanyOperationsNewCompany401>

export const companyOperationsNewCompanyMutationRequestSchema: import("zod").ZodNullable<import("zod").ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").AcquiredCompanyAccount>>> =
  acquiredCompanyAccountSchema.nullable() as unknown as ToZod<CompanyOperationsNewCompanyMutationRequest>

export const companyOperationsNewCompanyMutationResponseSchema: import("zod").ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").OpenNewCompanyResponse>> =
  companyOperationsNewCompany200Schema as unknown as ToZod<CompanyOperationsNewCompanyMutationResponse>