import type {
  CompanyOperationsGetSubMCCsQueryParams,
  CompanyOperationsGetSubMCCs200,
  CompanyOperationsGetSubMCCs401,
  CompanyOperationsGetSubMCCsQueryResponse,
} from '../../types/CompanyOperationsGetSubMCCs.ts'
import type { ToZod } from '@kubb/plugin-zod/utils'
import { mccdBsSchema } from '../mccd-bs-schema.ts'
import { z } from 'zod'

export const companyOperationsGetSubMcCsQueryParamsSchema: z.ZodObject<import("@kubb/plugin-zod/utils").ZodShape<CompanyOperationsGetSubMCCsQueryParams>> = z.object({
  SupplierUserName: z.string().nullable(),
  secret: z.string().nullable(),
  mccCode: z.coerce.number().int(),
}) as unknown as ToZod<CompanyOperationsGetSubMCCsQueryParams>

/**
 * @description successful request
 */
export const companyOperationsGetSubMcCs200Schema: z.ZodArray<z.ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").MCCDBs>>> = z.array(mccdBsSchema) as unknown as ToZod<CompanyOperationsGetSubMCCs200>

/**
 * @description Invalid username
 */
export const companyOperationsGetSubMcCs401Schema: z.ZodString = z.string() as unknown as ToZod<CompanyOperationsGetSubMCCs401>

export const companyOperationsGetSubMcCsQueryResponseSchema: z.ZodArray<z.ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").MCCDBs>>> = companyOperationsGetSubMcCs200Schema as unknown as ToZod<CompanyOperationsGetSubMCCsQueryResponse>