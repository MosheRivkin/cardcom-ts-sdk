/* eslint-disable no-alert, no-console */

import fetch from '@kubb/plugin-client/clients/axios'
import type {
  CompanyOperationsGetCountriesQueryResponse,
  CompanyOperationsGetCountriesQueryParams,
  CompanyOperationsGetCountries401,
} from '../../types/CompanyOperationsGetCountries.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'
import { companyOperationsGetCountriesQueryResponseSchema } from '../../zod/companyOperations/company-operations-get-countries-schema.ts'

function getCompanyOperationsGetCountriesUrl(): { method: string; url: "https://secure.cardcom.solutions/api/v11/CompanyOperations/GetCountries"; } {
  const res: { method: string; url: "https://secure.cardcom.solutions/api/v11/CompanyOperations/GetCountries"; } = { method: 'GET', url: `https://secure.cardcom.solutions/api/v11/CompanyOperations/GetCountries` as const }
  return res
}

/**
 * @description RecruitmentSystem operations
 * @summary Get countries
 * {@link /api/v11/CompanyOperations/GetCountries}
 */
export async function companyOperationsGetCountries(
  { params }: { params: CompanyOperationsGetCountriesQueryParams },
  config: Partial<RequestConfig> & { client?: typeof fetch } = {},
): Promise<{ CountryCode?: string | null | undefined; Name?: string | null | undefined; NameHeb?: string | null | undefined; Alpha_2?: string | null | undefined; Alpha_3?: string | null | undefined; Iso_3166_2?: string | null | undefined; Region?: string | null | undefined; SubRegion?: string | null | undefined; IntermediateRegion?: string | null | undefined; RegionCode?: string | null | undefined; SubRegionCode?: string | null | undefined; IntermediateRegionCode?: string | null | undefined; BDI_CountryCode?: string | null | undefined; }[]> {
  const { client: request = fetch, ...requestConfig } = config

  const res: import("@kubb/plugin-client/clients/axios").ResponseConfig<import("src/index").CompanyOperationsGetCountries200> = await request<CompanyOperationsGetCountriesQueryResponse, ResponseErrorConfig<CompanyOperationsGetCountries401>, unknown>({
    method: 'GET',
    url: getCompanyOperationsGetCountriesUrl().url.toString(),
    params,
    ...requestConfig,
  })
  return companyOperationsGetCountriesQueryResponseSchema.parse(res.data)
}