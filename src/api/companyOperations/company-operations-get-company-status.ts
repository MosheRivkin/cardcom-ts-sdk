/* eslint-disable no-alert, no-console */

import fetch from '@kubb/plugin-client/clients/axios'
import type {
  CompanyOperationsGetCompanyStatusQueryResponse,
  CompanyOperationsGetCompanyStatusQueryParams,
  CompanyOperationsGetCompanyStatus400,
  CompanyOperationsGetCompanyStatus401,
} from '../../types/CompanyOperationsGetCompanyStatus.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'
import { companyOperationsGetCompanyStatusQueryResponseSchema } from '../../zod/companyOperations/company-operations-get-company-status-schema.ts'

function getCompanyOperationsGetCompanyStatusUrl() {
  const res = { method: 'GET', url: `https://secure.cardcom.solutions/api/v11/CompanyOperations/GetCompanyStatus` as const }
  return res
}

/**
 * @description RecruitmentSystem operations
 * @summary Get company status - Validate KYC info
 * {@link /api/v11/CompanyOperations/GetCompanyStatus}
 */
export async function companyOperationsGetCompanyStatus(
  { params }: { params: CompanyOperationsGetCompanyStatusQueryParams },
  config: Partial<RequestConfig> & { client?: typeof fetch } = {},
) {
  const { client: request = fetch, ...requestConfig } = config

  const res = await request<
    CompanyOperationsGetCompanyStatusQueryResponse,
    ResponseErrorConfig<CompanyOperationsGetCompanyStatus400 | CompanyOperationsGetCompanyStatus401>,
    unknown
  >({ method: 'GET', url: getCompanyOperationsGetCompanyStatusUrl().url.toString(), params, ...requestConfig })
  return companyOperationsGetCompanyStatusQueryResponseSchema.parse(res.data)
}