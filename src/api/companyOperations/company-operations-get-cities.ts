/* eslint-disable no-alert, no-console */

import fetch from '@kubb/plugin-client/clients/axios'
import type {
  CompanyOperationsGetCitiesQueryResponse,
  CompanyOperationsGetCitiesQueryParams,
  CompanyOperationsGetCities401,
} from '../../types/CompanyOperationsGetCities.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'
import { companyOperationsGetCitiesQueryResponseSchema } from '../../zod/companyOperations/company-operations-get-cities-schema.ts'

function getCompanyOperationsGetCitiesUrl(): { method: string; url: "https://secure.cardcom.solutions/api/v11/CompanyOperations/GetCities"; } {
  const res: { method: string; url: "https://secure.cardcom.solutions/api/v11/CompanyOperations/GetCities"; } = { method: 'GET', url: `https://secure.cardcom.solutions/api/v11/CompanyOperations/GetCities` as const }
  return res
}

/**
 * @description RecruitmentSystem operations
 * @summary Get cities
 * {@link /api/v11/CompanyOperations/GetCities}
 */
export async function companyOperationsGetCities(
  { params }: { params: CompanyOperationsGetCitiesQueryParams },
  config: Partial<RequestConfig> & { client?: typeof fetch } = {},
): Promise<{ Id?: number | undefined; CodeCity?: number | null | undefined; City?: string | null | undefined; CityEng?: string | null | undefined; }[]> {
  const { client: request = fetch, ...requestConfig } = config

  const res: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-client/dist/clients/axios").ResponseConfig<import("/home/m/dev/git/cardcom-ts-sdk/src/index").CompanyOperationsGetCities200> = await request<CompanyOperationsGetCitiesQueryResponse, ResponseErrorConfig<CompanyOperationsGetCities401>, unknown>({
    method: 'GET',
    url: getCompanyOperationsGetCitiesUrl().url.toString(),
    params,
    ...requestConfig,
  })
  return companyOperationsGetCitiesQueryResponseSchema.parse(res.data)
}