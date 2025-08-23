/* eslint-disable no-alert, no-console */

import fetch from '@kubb/plugin-client/clients/axios'
import type {
  CompanyOperationsMeagedGetCompanyInfoMutationRequest,
  CompanyOperationsMeagedGetCompanyInfoMutationResponse,
} from '../../types/CompanyOperationsMeagedGetCompanyInfo.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'
import {
  companyOperationsMeagedGetCompanyInfoMutationResponseSchema,
  companyOperationsMeagedGetCompanyInfoMutationRequestSchema,
} from '../../zod/companyOperations/company-operations-meaged-get-company-info-schema.ts'

function getCompanyOperationsMeagedGetCompanyInfoUrl() {
  const res = { method: 'POST', url: `https://secure.cardcom.solutions/api/v11/CompanyOperations/MeagedGetCompanyInfo` as const }
  return res
}

/**
 * @description RecruitmentSystem operations
 * @summary Get sapak numbers status by SapakNumber or BusinessRegistrationNumber
 * {@link /api/v11/CompanyOperations/MeagedGetCompanyInfo}
 */
export async function companyOperationsMeagedGetCompanyInfo(
  { data }: { data?: CompanyOperationsMeagedGetCompanyInfoMutationRequest },
  config: Partial<RequestConfig<CompanyOperationsMeagedGetCompanyInfoMutationRequest>> & { client?: typeof fetch } = {},
) {
  const { client: request = fetch, ...requestConfig } = config

  const requestData = companyOperationsMeagedGetCompanyInfoMutationRequestSchema.parse(data)
  const res = await request<
    CompanyOperationsMeagedGetCompanyInfoMutationResponse,
    ResponseErrorConfig<Error>,
    CompanyOperationsMeagedGetCompanyInfoMutationRequest
  >({ method: 'POST', url: getCompanyOperationsMeagedGetCompanyInfoUrl().url.toString(), data: requestData, ...requestConfig })
  return companyOperationsMeagedGetCompanyInfoMutationResponseSchema.parse(res.data)
}