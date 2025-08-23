/* eslint-disable no-alert, no-console */

import fetch from '@kubb/plugin-client/clients/axios'
import type {
  CompanyOperationsGetSubMCCsQueryResponse,
  CompanyOperationsGetSubMCCsQueryParams,
  CompanyOperationsGetSubMCCs401,
} from '../../types/CompanyOperationsGetSubMCCs.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'
import { companyOperationsGetSubMcCsQueryResponseSchema } from '../../zod/companyOperations/company-operations-get-sub-mc-cs-schema.ts'

function getCompanyOperationsGetSubMcCsUrl() {
  const res = { method: 'GET', url: `https://secure.cardcom.solutions/api/v11/CompanyOperations/GetSubMCCs` as const }
  return res
}

/**
 * @description RecruitmentSystem operations
 * @summary Get Sub MCCs
 * {@link /api/v11/CompanyOperations/GetSubMCCs}
 */
export async function companyOperationsGetSubMcCs(
  { params }: { params: CompanyOperationsGetSubMCCsQueryParams },
  config: Partial<RequestConfig> & { client?: typeof fetch } = {},
) {
  const { client: request = fetch, ...requestConfig } = config

  const res = await request<CompanyOperationsGetSubMCCsQueryResponse, ResponseErrorConfig<CompanyOperationsGetSubMCCs401>, unknown>({
    method: 'GET',
    url: getCompanyOperationsGetSubMcCsUrl().url.toString(),
    params,
    ...requestConfig,
  })
  return companyOperationsGetSubMcCsQueryResponseSchema.parse(res.data)
}