import type {
  CompanyOperationsGetStreetsQueryParams,
  CompanyOperationsGetStreets200,
  CompanyOperationsGetStreets401,
  CompanyOperationsGetStreetsQueryResponse,
} from '../../types/CompanyOperationsGetStreets.ts'
import type { ToZod } from '@kubb/plugin-zod/utils'
import { dataGovStreetCodesSchema } from '../data-gov-street-codes-schema.ts'
import { z } from 'zod'

export const companyOperationsGetStreetsQueryParamsSchema: z.ZodObject<import("@kubb/plugin-zod/utils").ZodShape<CompanyOperationsGetStreetsQueryParams>> = z.object({
  SupplierUserName: z.string().nullable(),
  secret: z.string().nullable(),
  cityCode: z.coerce.number().int(),
  startwith: z.string().default('').nullable().nullish(),
}) as unknown as ToZod<CompanyOperationsGetStreetsQueryParams>

/**
 * @description successful request
 */
export const companyOperationsGetStreets200Schema: z.ZodArray<z.ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").DataGovStreetCodes>>> = z.array(dataGovStreetCodesSchema) as unknown as ToZod<CompanyOperationsGetStreets200>

/**
 * @description Invalid username
 */
export const companyOperationsGetStreets401Schema: z.ZodString = z.string() as unknown as ToZod<CompanyOperationsGetStreets401>

export const companyOperationsGetStreetsQueryResponseSchema: z.ZodArray<z.ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").DataGovStreetCodes>>> = companyOperationsGetStreets200Schema as unknown as ToZod<CompanyOperationsGetStreetsQueryResponse>