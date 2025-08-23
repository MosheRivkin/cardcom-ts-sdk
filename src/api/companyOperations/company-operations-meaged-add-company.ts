/* eslint-disable no-alert, no-console */

import fetch from '@kubb/plugin-client/clients/axios'
import type {
  CompanyOperationsMeagedAddCompanyMutationRequest,
  CompanyOperationsMeagedAddCompanyMutationResponse,
} from '../../types/CompanyOperationsMeagedAddCompany.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'
import {
  companyOperationsMeagedAddCompanyMutationResponseSchema,
  companyOperationsMeagedAddCompanyMutationRequestSchema,
} from '../../zod/companyOperations/company-operations-meaged-add-company-schema.ts'

function getCompanyOperationsMeagedAddCompanyUrl() {
  const res = { method: 'POST', url: `https://secure.cardcom.solutions/api/v11/CompanyOperations/MeagedAddCompany` as const }
  return res
}

/**
 * @description RecruitmentSystem operations
 * @summary Add Company for Meaged
 * {@link /api/v11/CompanyOperations/MeagedAddCompany}
 */
export async function companyOperationsMeagedAddCompany(
  { data }: { data?: CompanyOperationsMeagedAddCompanyMutationRequest },
  config: Partial<RequestConfig<CompanyOperationsMeagedAddCompanyMutationRequest>> & { client?: typeof fetch } = {},
) {
  const { client: request = fetch, ...requestConfig } = config

  const requestData = companyOperationsMeagedAddCompanyMutationRequestSchema.parse(data)
  const res = await request<CompanyOperationsMeagedAddCompanyMutationResponse, ResponseErrorConfig<Error>, CompanyOperationsMeagedAddCompanyMutationRequest>({
    method: 'POST',
    url: getCompanyOperationsMeagedAddCompanyUrl().url.toString(),
    data: requestData,
    ...requestConfig,
  })
  return companyOperationsMeagedAddCompanyMutationResponseSchema.parse(res.data)
}