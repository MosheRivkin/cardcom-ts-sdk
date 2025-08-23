/* eslint-disable no-alert, no-console */

import fetch from '@kubb/plugin-client/clients/axios'
import type {
  CompanyOperationsCloseCompanyMutationRequest,
  CompanyOperationsCloseCompanyMutationResponse,
  CompanyOperationsCloseCompany400,
  CompanyOperationsCloseCompany401,
} from '../../types/CompanyOperationsCloseCompany.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'
import {
  companyOperationsCloseCompanyMutationResponseSchema,
  companyOperationsCloseCompanyMutationRequestSchema,
} from '../../zod/companyOperations/company-operations-close-company-schema.ts'

function getCompanyOperationsCloseCompanyUrl() {
  const res = { method: 'POST', url: `https://secure.cardcom.solutions/api/v11/CompanyOperations/CloseCompany` as const }
  return res
}

/**
 * @description RecruitmentSystem operations
 * @summary Close company
 * {@link /api/v11/CompanyOperations/CloseCompany}
 */
export async function companyOperationsCloseCompany(
  { data }: { data?: CompanyOperationsCloseCompanyMutationRequest },
  config: Partial<RequestConfig<CompanyOperationsCloseCompanyMutationRequest>> & { client?: typeof fetch } = {},
) {
  const { client: request = fetch, ...requestConfig } = config

  const requestData = companyOperationsCloseCompanyMutationRequestSchema.parse(data)
  const res = await request<
    CompanyOperationsCloseCompanyMutationResponse,
    ResponseErrorConfig<CompanyOperationsCloseCompany400 | CompanyOperationsCloseCompany401>,
    CompanyOperationsCloseCompanyMutationRequest
  >({ method: 'POST', url: getCompanyOperationsCloseCompanyUrl().url.toString(), data: requestData, ...requestConfig })
  return companyOperationsCloseCompanyMutationResponseSchema.parse(res.data)
}