/* eslint-disable no-alert, no-console */

import fetch from '@kubb/plugin-client/clients/axios'
import type {
  CompanyOperationsGetStreetsQueryResponse,
  CompanyOperationsGetStreetsQueryParams,
  CompanyOperationsGetStreets401,
} from '../../types/CompanyOperationsGetStreets.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'
import { companyOperationsGetStreetsQueryResponseSchema } from '../../zod/companyOperations/company-operations-get-streets-schema.ts'

function getCompanyOperationsGetStreetsUrl() {
  const res = { method: 'GET', url: `https://secure.cardcom.solutions/api/v11/CompanyOperations/GetStreets` as const }
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
) {
  const { client: request = fetch, ...requestConfig } = config

  const res = await request<CompanyOperationsGetStreetsQueryResponse, ResponseErrorConfig<CompanyOperationsGetStreets401>, unknown>({
    method: 'GET',
    url: getCompanyOperationsGetStreetsUrl().url.toString(),
    params,
    ...requestConfig,
  })
  return companyOperationsGetStreetsQueryResponseSchema.parse(res.data)
}