import type {
  CompanyOperationsCloseCompany200,
  CompanyOperationsCloseCompany400,
  CompanyOperationsCloseCompany401,
  CompanyOperationsCloseCompanyMutationRequest,
  CompanyOperationsCloseCompanyMutationResponse,
} from '../../types/CompanyOperationsCloseCompany.ts'
import type { ToZod } from '@kubb/plugin-zod/utils'
import { acquiredCompanyAccountSchema } from '../acquired-company-account-schema.ts'
import { errorInfoSchema } from '../error-info-schema.ts'
import { openNewCompanyResponseSchema } from '../open-new-company-response-schema.ts'

/**
 * @description successful request
 */
export const companyOperationsCloseCompany200Schema: import("zod").ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").OpenNewCompanyResponse>> = openNewCompanyResponseSchema as unknown as ToZod<CompanyOperationsCloseCompany200>

/**
 * @description Invalid request , see \'Description\' in response for more information
 */
export const companyOperationsCloseCompany400Schema: import("zod").ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").ErrorInfo>> = errorInfoSchema.describe(
  'error information for non http status 200',
) as unknown as ToZod<CompanyOperationsCloseCompany400>

/**
 * @description Invalid username
 */
export const companyOperationsCloseCompany401Schema: import("zod").ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").ErrorInfo>> = errorInfoSchema.describe(
  'error information for non http status 200',
) as unknown as ToZod<CompanyOperationsCloseCompany401>

export const companyOperationsCloseCompanyMutationRequestSchema: import("zod").ZodNullable<import("zod").ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").AcquiredCompanyAccount>>> =
  acquiredCompanyAccountSchema.nullable() as unknown as ToZod<CompanyOperationsCloseCompanyMutationRequest>

export const companyOperationsCloseCompanyMutationResponseSchema: import("zod").ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").OpenNewCompanyResponse>> =
  companyOperationsCloseCompany200Schema as unknown as ToZod<CompanyOperationsCloseCompanyMutationResponse>