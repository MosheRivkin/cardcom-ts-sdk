import type {
  CompanyOperationsGetMainMCCsQueryParams,
  CompanyOperationsGetMainMCCs200,
  CompanyOperationsGetMainMCCs401,
  CompanyOperationsGetMainMCCsQueryResponse,
} from '../../types/CompanyOperationsGetMainMCCs.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { mccdBsMainSchema } from '../mccd-bs-main-schema.ts'
import { z } from 'zod'

export const companyOperationsGetMainMcCsQueryParamsSchema = z.object({
  SupplierUserName: z.string().nullable(),
  secret: z.string().nullable(),
}) as unknown as ToZod<CompanyOperationsGetMainMCCsQueryParams>

/**
 * @description successful request
 */
export const companyOperationsGetMainMcCs200Schema = z.array(mccdBsMainSchema) as unknown as ToZod<CompanyOperationsGetMainMCCs200>

/**
 * @description Invalid username
 */
export const companyOperationsGetMainMcCs401Schema = z.string() as unknown as ToZod<CompanyOperationsGetMainMCCs401>

export const companyOperationsGetMainMcCsQueryResponseSchema =
  companyOperationsGetMainMcCs200Schema as unknown as ToZod<CompanyOperationsGetMainMCCsQueryResponse>