import type {
  CompanyOperationsGetCountriesQueryParams,
  CompanyOperationsGetCountries200,
  CompanyOperationsGetCountries401,
  CompanyOperationsGetCountriesQueryResponse,
} from '../../types/CompanyOperationsGetCountries.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { countriesIsoSchema } from '../countries-iso-schema.ts'
import { z } from 'zod'

export const companyOperationsGetCountriesQueryParamsSchema = z.object({
  SupplierUserName: z.string().nullable(),
  secret: z.string().nullable(),
}) as unknown as ToZod<CompanyOperationsGetCountriesQueryParams>

/**
 * @description successful request
 */
export const companyOperationsGetCountries200Schema = z.array(countriesIsoSchema) as unknown as ToZod<CompanyOperationsGetCountries200>

/**
 * @description Invalid username
 */
export const companyOperationsGetCountries401Schema = z.string() as unknown as ToZod<CompanyOperationsGetCountries401>

export const companyOperationsGetCountriesQueryResponseSchema =
  companyOperationsGetCountries200Schema as unknown as ToZod<CompanyOperationsGetCountriesQueryResponse>