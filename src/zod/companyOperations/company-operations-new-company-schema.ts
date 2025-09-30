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
export const companyOperationsNewCompany200Schema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").OpenNewCompanyResponse>, "passthrough"> = openNewCompanyResponseSchema as unknown as ToZod<CompanyOperationsNewCompany200>

/**
 * @description Invalid request , see \'Description\' in response for more information
 */
export const companyOperationsNewCompany400Schema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").ErrorInfo>, "passthrough"> = errorInfoSchema.describe(
  'error information for non http status 200',
) as unknown as ToZod<CompanyOperationsNewCompany400>

/**
 * @description Invalid username
 */
export const companyOperationsNewCompany401Schema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").ErrorInfo>, "passthrough"> = errorInfoSchema.describe(
  'error information for non http status 200',
) as unknown as ToZod<CompanyOperationsNewCompany401>

export const companyOperationsNewCompanyMutationRequestSchema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodNullable<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").AcquiredCompanyAccount>, "passthrough">> =
  acquiredCompanyAccountSchema.nullable() as unknown as ToZod<CompanyOperationsNewCompanyMutationRequest>

export const companyOperationsNewCompanyMutationResponseSchema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").OpenNewCompanyResponse>, "passthrough"> =
  companyOperationsNewCompany200Schema as unknown as ToZod<CompanyOperationsNewCompanyMutationResponse>