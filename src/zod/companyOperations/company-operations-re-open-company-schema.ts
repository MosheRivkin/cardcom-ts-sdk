import type {
  CompanyOperationsReOpenCompany200,
  CompanyOperationsReOpenCompany400,
  CompanyOperationsReOpenCompany401,
  CompanyOperationsReOpenCompanyMutationRequest,
  CompanyOperationsReOpenCompanyMutationResponse,
} from '../../types/CompanyOperationsReOpenCompany.ts'
import type { ToZod } from '@kubb/plugin-zod/utils'
import { acquiredCompanyAccountSchema } from '../acquired-company-account-schema.ts'
import { errorInfoSchema } from '../error-info-schema.ts'
import { openNewCompanyResponseSchema } from '../open-new-company-response-schema.ts'

/**
 * @description successful request
 */
export const companyOperationsReOpenCompany200Schema: import("zod").ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").OpenNewCompanyResponse>> = openNewCompanyResponseSchema as unknown as ToZod<CompanyOperationsReOpenCompany200>

/**
 * @description Invalid request , see \'Description\' in response for more information
 */
export const companyOperationsReOpenCompany400Schema: import("zod").ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").ErrorInfo>> = errorInfoSchema.describe(
  'error information for non http status 200',
) as unknown as ToZod<CompanyOperationsReOpenCompany400>

/**
 * @description Invalid username
 */
export const companyOperationsReOpenCompany401Schema: import("zod").ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").ErrorInfo>> = errorInfoSchema.describe(
  'error information for non http status 200',
) as unknown as ToZod<CompanyOperationsReOpenCompany401>

export const companyOperationsReOpenCompanyMutationRequestSchema: import("zod").ZodNullable<import("zod").ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").AcquiredCompanyAccount>>> =
  acquiredCompanyAccountSchema.nullable() as unknown as ToZod<CompanyOperationsReOpenCompanyMutationRequest>

export const companyOperationsReOpenCompanyMutationResponseSchema: import("zod").ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").OpenNewCompanyResponse>> =
  companyOperationsReOpenCompany200Schema as unknown as ToZod<CompanyOperationsReOpenCompanyMutationResponse>