import type {
  CompanyOperationsGetMainMCCsQueryParams,
  CompanyOperationsGetMainMCCs200,
  CompanyOperationsGetMainMCCs401,
  CompanyOperationsGetMainMCCsQueryResponse,
} from '../../types/CompanyOperationsGetMainMCCs.ts'
import type { ToZod } from '@kubb/plugin-zod/utils'
import { mccdBsMainSchema } from '../mccd-bs-main-schema.ts'
import { z } from 'zod'

export const companyOperationsGetMainMcCsQueryParamsSchema: z.ZodObject<import("@kubb/plugin-zod/utils").ZodShape<CompanyOperationsGetMainMCCsQueryParams>> = z.object({
  SupplierUserName: z.string().nullable(),
  secret: z.string().nullable(),
}) as unknown as ToZod<CompanyOperationsGetMainMCCsQueryParams>

/**
 * @description successful request
 */
export const companyOperationsGetMainMcCs200Schema: z.ZodArray<z.ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").MCCDBsMAIN>>> = z.array(mccdBsMainSchema) as unknown as ToZod<CompanyOperationsGetMainMCCs200>

/**
 * @description Invalid username
 */
export const companyOperationsGetMainMcCs401Schema: z.ZodString = z.string() as unknown as ToZod<CompanyOperationsGetMainMCCs401>

export const companyOperationsGetMainMcCsQueryResponseSchema: z.ZodArray<z.ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").MCCDBsMAIN>>> =
  companyOperationsGetMainMcCs200Schema as unknown as ToZod<CompanyOperationsGetMainMCCsQueryResponse>