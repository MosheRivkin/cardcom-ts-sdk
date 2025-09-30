/* eslint-disable no-alert, no-console */

import fetch from '@kubb/plugin-client/clients/axios'
import type {
  CompanyOperationsGetStreetsQueryResponse,
  CompanyOperationsGetStreetsQueryParams,
  CompanyOperationsGetStreets401,
} from '../../types/CompanyOperationsGetStreets.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'
import { companyOperationsGetStreetsQueryResponseSchema } from '../../zod/companyOperations/company-operations-get-streets-schema.ts'

function getCompanyOperationsGetStreetsUrl(): { method: string; url: "https://secure.cardcom.solutions/api/v11/CompanyOperations/GetStreets"; } {
  const res: { method: string; url: "https://secure.cardcom.solutions/api/v11/CompanyOperations/GetStreets"; } = { method: 'GET', url: `https://secure.cardcom.solutions/api/v11/CompanyOperations/GetStreets` as const }
  return res
}

/**
 * @description RecruitmentSystem operations
 * @summary Get streets
 * {@link /api/v11/CompanyOperations/GetStreets}
 */
export async function companyOperationsGetStreets(
  { params }: { params: CompanyOperationsGetStreetsQueryParams },
  config: Partial<RequestConfig> & { client?: typeof fetch } = {},
): Promise<{ Id?: number | undefined; CodeStreet?: number | null | undefined; Street?: string | null | undefined; CityCode?: number | null | undefined; StreetEng?: string | null | undefined; }[]> {
  const { client: request = fetch, ...requestConfig } = config

  const res: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-client/dist/clients/axios").ResponseConfig<import("/home/m/dev/git/cardcom-ts-sdk/src/index").CompanyOperationsGetStreets200> = await request<CompanyOperationsGetStreetsQueryResponse, ResponseErrorConfig<CompanyOperationsGetStreets401>, unknown>({
    method: 'GET',
    url: getCompanyOperationsGetStreetsUrl().url.toString(),
    params,
    ...requestConfig,
  })
  return companyOperationsGetStreetsQueryResponseSchema.parse(res.data)
}