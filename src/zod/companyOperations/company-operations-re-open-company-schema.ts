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
export const companyOperationsReOpenCompany200Schema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").OpenNewCompanyResponse>, "passthrough"> = openNewCompanyResponseSchema as unknown as ToZod<CompanyOperationsReOpenCompany200>

/**
 * @description Invalid request , see \'Description\' in response for more information
 */
export const companyOperationsReOpenCompany400Schema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").ErrorInfo>, "passthrough"> = errorInfoSchema.describe(
  'error information for non http status 200',
) as unknown as ToZod<CompanyOperationsReOpenCompany400>

/**
 * @description Invalid username
 */
export const companyOperationsReOpenCompany401Schema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").ErrorInfo>, "passthrough"> = errorInfoSchema.describe(
  'error information for non http status 200',
) as unknown as ToZod<CompanyOperationsReOpenCompany401>

export const companyOperationsReOpenCompanyMutationRequestSchema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodNullable<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").AcquiredCompanyAccount>, "passthrough">> =
  acquiredCompanyAccountSchema.nullable() as unknown as ToZod<CompanyOperationsReOpenCompanyMutationRequest>

export const companyOperationsReOpenCompanyMutationResponseSchema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").OpenNewCompanyResponse>, "passthrough"> =
  companyOperationsReOpenCompany200Schema as unknown as ToZod<CompanyOperationsReOpenCompanyMutationResponse>