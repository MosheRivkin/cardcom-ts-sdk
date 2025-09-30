import type {
  CompanyOperationsGetCompanyStatusQueryParams,
  CompanyOperationsGetCompanyStatus200,
  CompanyOperationsGetCompanyStatus400,
  CompanyOperationsGetCompanyStatus401,
  CompanyOperationsGetCompanyStatusQueryResponse,
} from '../../types/CompanyOperationsGetCompanyStatus.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { rsContentSchema } from '../rs-content-schema.ts'
import { z } from 'zod'

export const companyOperationsGetCompanyStatusQueryParamsSchema: z.ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<CompanyOperationsGetCompanyStatusQueryParams>, "passthrough"> = z.object({
  companyNumber: z.coerce.number().int(),
  terminalNumber: z.coerce.number().int(),
}) as unknown as ToZod<CompanyOperationsGetCompanyStatusQueryParams>

/**
 * @description successful request
 */
export const companyOperationsGetCompanyStatus200Schema: z.ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").RSContent>, "passthrough"> = rsContentSchema as unknown as ToZod<CompanyOperationsGetCompanyStatus200>

/**
 * @description Invalid request , see \'Description\' in response for more information
 */
export const companyOperationsGetCompanyStatus400Schema: z.ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").RSContent>, "passthrough"> = rsContentSchema as unknown as ToZod<CompanyOperationsGetCompanyStatus400>

/**
 * @description Invalid username
 */
export const companyOperationsGetCompanyStatus401Schema: z.ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").RSContent>, "passthrough"> = rsContentSchema as unknown as ToZod<CompanyOperationsGetCompanyStatus401>

export const companyOperationsGetCompanyStatusQueryResponseSchema: z.ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").RSContent>, "passthrough"> =
  companyOperationsGetCompanyStatus200Schema as unknown as ToZod<CompanyOperationsGetCompanyStatusQueryResponse>