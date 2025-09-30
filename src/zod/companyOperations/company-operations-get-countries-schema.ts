import type {
  CompanyOperationsGetCountriesQueryParams,
  CompanyOperationsGetCountries200,
  CompanyOperationsGetCountries401,
  CompanyOperationsGetCountriesQueryResponse,
} from '../../types/CompanyOperationsGetCountries.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { countriesIsoSchema } from '../countries-iso-schema.ts'
import { z } from 'zod'

export const companyOperationsGetCountriesQueryParamsSchema: z.ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<CompanyOperationsGetCountriesQueryParams>, "passthrough"> = z.object({
  SupplierUserName: z.string().nullable(),
  secret: z.string().nullable(),
}) as unknown as ToZod<CompanyOperationsGetCountriesQueryParams>

/**
 * @description successful request
 */
export const companyOperationsGetCountries200Schema: z.ZodArray<z.ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").CountriesISO>, "passthrough">> = z.array(countriesIsoSchema) as unknown as ToZod<CompanyOperationsGetCountries200>

/**
 * @description Invalid username
 */
export const companyOperationsGetCountries401Schema: z.ZodString = z.string() as unknown as ToZod<CompanyOperationsGetCountries401>

export const companyOperationsGetCountriesQueryResponseSchema: z.ZodArray<z.ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").CountriesISO>, "passthrough">> =
  companyOperationsGetCountries200Schema as unknown as ToZod<CompanyOperationsGetCountriesQueryResponse>