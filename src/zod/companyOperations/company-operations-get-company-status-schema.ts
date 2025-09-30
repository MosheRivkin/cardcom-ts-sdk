import type {
  CompanyOperationsGetCompanyStatusQueryParams,
  CompanyOperationsGetCompanyStatus200,
  CompanyOperationsGetCompanyStatus400,
  CompanyOperationsGetCompanyStatus401,
  CompanyOperationsGetCompanyStatusQueryResponse,
} from '../../types/CompanyOperationsGetCompanyStatus.ts'
import type { ToZod } from '@kubb/plugin-zod/utils'
import { rsContentSchema } from '../rs-content-schema.ts'
import { z } from 'zod'

export const companyOperationsGetCompanyStatusQueryParamsSchema: z.ZodObject<import("@kubb/plugin-zod/utils").ZodShape<CompanyOperationsGetCompanyStatusQueryParams>> = z.object({
  companyNumber: z.coerce.number().int(),
  terminalNumber: z.coerce.number().int(),
}) as unknown as ToZod<CompanyOperationsGetCompanyStatusQueryParams>

/**
 * @description successful request
 */
export const companyOperationsGetCompanyStatus200Schema: z.ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").RSContent>> = rsContentSchema as unknown as ToZod<CompanyOperationsGetCompanyStatus200>

/**
 * @description Invalid request , see \'Description\' in response for more information
 */
export const companyOperationsGetCompanyStatus400Schema: z.ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").RSContent>> = rsContentSchema as unknown as ToZod<CompanyOperationsGetCompanyStatus400>

/**
 * @description Invalid username
 */
export const companyOperationsGetCompanyStatus401Schema: z.ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").RSContent>> = rsContentSchema as unknown as ToZod<CompanyOperationsGetCompanyStatus401>

export const companyOperationsGetCompanyStatusQueryResponseSchema: z.ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").RSContent>> =
  companyOperationsGetCompanyStatus200Schema as unknown as ToZod<CompanyOperationsGetCompanyStatusQueryResponse>