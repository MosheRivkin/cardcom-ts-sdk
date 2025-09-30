import type {
  CompanyOperationsGetStreetsQueryParams,
  CompanyOperationsGetStreets200,
  CompanyOperationsGetStreets401,
  CompanyOperationsGetStreetsQueryResponse,
} from '../../types/CompanyOperationsGetStreets.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { dataGovStreetCodesSchema } from '../data-gov-street-codes-schema.ts'
import { z } from 'zod'

export const companyOperationsGetStreetsQueryParamsSchema: z.ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<CompanyOperationsGetStreetsQueryParams>, "passthrough"> = z.object({
  SupplierUserName: z.string().nullable(),
  secret: z.string().nullable(),
  cityCode: z.coerce.number().int(),
  startwith: z.string().default('').nullable().nullish(),
}) as unknown as ToZod<CompanyOperationsGetStreetsQueryParams>

/**
 * @description successful request
 */
export const companyOperationsGetStreets200Schema: z.ZodArray<z.ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").DataGovStreetCodes>, "passthrough">> = z.array(dataGovStreetCodesSchema) as unknown as ToZod<CompanyOperationsGetStreets200>

/**
 * @description Invalid username
 */
export const companyOperationsGetStreets401Schema: z.ZodString = z.string() as unknown as ToZod<CompanyOperationsGetStreets401>

export const companyOperationsGetStreetsQueryResponseSchema: z.ZodArray<z.ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").DataGovStreetCodes>, "passthrough">> = companyOperationsGetStreets200Schema as unknown as ToZod<CompanyOperationsGetStreetsQueryResponse>