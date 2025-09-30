import type {
  CompanyOperationsGetCitiesQueryParams,
  CompanyOperationsGetCities200,
  CompanyOperationsGetCities401,
  CompanyOperationsGetCitiesQueryResponse,
} from '../../types/CompanyOperationsGetCities.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { dataGovCityCodesSchema } from '../data-gov-city-codes-schema.ts'
import { z } from 'zod'

export const companyOperationsGetCitiesQueryParamsSchema: z.ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<CompanyOperationsGetCitiesQueryParams>, "passthrough"> = z.object({
  SupplierUserName: z.string().nullable(),
  secret: z.string().nullable(),
  startwith: z.string().default('').nullable().nullish(),
}) as unknown as ToZod<CompanyOperationsGetCitiesQueryParams>

/**
 * @description successful request
 */
export const companyOperationsGetCities200Schema: z.ZodArray<z.ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").DataGovCityCodes>, "passthrough">> = z.array(dataGovCityCodesSchema) as unknown as ToZod<CompanyOperationsGetCities200>

/**
 * @description Invalid username
 */
export const companyOperationsGetCities401Schema: z.ZodString = z.string() as unknown as ToZod<CompanyOperationsGetCities401>

export const companyOperationsGetCitiesQueryResponseSchema: z.ZodArray<z.ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").DataGovCityCodes>, "passthrough">> = companyOperationsGetCities200Schema as unknown as ToZod<CompanyOperationsGetCitiesQueryResponse>