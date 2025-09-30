import type {
  CompanyOperationsGetBanksQueryParams,
  CompanyOperationsGetBanks200,
  CompanyOperationsGetBanks401,
  CompanyOperationsGetBanksQueryResponse,
} from '../../types/CompanyOperationsGetBanks.ts'
import type { ToZod } from '@kubb/plugin-zod/utils'
import { banksSchema } from '../banks-schema.ts'
import { z } from 'zod'

export const companyOperationsGetBanksQueryParamsSchema: z.ZodObject<import("@kubb/plugin-zod/utils").ZodShape<CompanyOperationsGetBanksQueryParams>> = z.object({
  SupplierUserName: z.string().nullable(),
  secret: z.string().nullable(),
}) as unknown as ToZod<CompanyOperationsGetBanksQueryParams>

/**
 * @description successful request
 */
export const companyOperationsGetBanks200Schema: z.ZodArray<z.ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").Banks>>> = z.array(banksSchema) as unknown as ToZod<CompanyOperationsGetBanks200>

/**
 * @description Invalid username
 */
export const companyOperationsGetBanks401Schema: z.ZodString = z.string() as unknown as ToZod<CompanyOperationsGetBanks401>

export const companyOperationsGetBanksQueryResponseSchema: z.ZodArray<z.ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").Banks>>> = companyOperationsGetBanks200Schema as unknown as ToZod<CompanyOperationsGetBanksQueryResponse>