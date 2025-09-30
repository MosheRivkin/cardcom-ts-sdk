import type {
  CompanyOperationsGetSubMCCsQueryParams,
  CompanyOperationsGetSubMCCs200,
  CompanyOperationsGetSubMCCs401,
  CompanyOperationsGetSubMCCsQueryResponse,
} from '../../types/CompanyOperationsGetSubMCCs.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { mccdBsSchema } from '../mccd-bs-schema.ts'
import { z } from 'zod'

export const companyOperationsGetSubMcCsQueryParamsSchema: z.ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<CompanyOperationsGetSubMCCsQueryParams>, "passthrough"> = z.object({
  SupplierUserName: z.string().nullable(),
  secret: z.string().nullable(),
  mccCode: z.coerce.number().int(),
}) as unknown as ToZod<CompanyOperationsGetSubMCCsQueryParams>

/**
 * @description successful request
 */
export const companyOperationsGetSubMcCs200Schema: z.ZodArray<z.ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").MCCDBs>, "passthrough">> = z.array(mccdBsSchema) as unknown as ToZod<CompanyOperationsGetSubMCCs200>

/**
 * @description Invalid username
 */
export const companyOperationsGetSubMcCs401Schema: z.ZodString = z.string() as unknown as ToZod<CompanyOperationsGetSubMCCs401>

export const companyOperationsGetSubMcCsQueryResponseSchema: z.ZodArray<z.ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").MCCDBs>, "passthrough">> = companyOperationsGetSubMcCs200Schema as unknown as ToZod<CompanyOperationsGetSubMCCsQueryResponse>