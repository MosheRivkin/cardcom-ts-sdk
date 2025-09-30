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

function getCompanyOperationsMeagedGetCompanyInfoUrl(): { method: string; url: "https://secure.cardcom.solutions/api/v11/CompanyOperations/MeagedGetCompanyInfo"; } {
  const res: { method: string; url: "https://secure.cardcom.solutions/api/v11/CompanyOperations/MeagedGetCompanyInfo"; } = { method: 'POST', url: `https://secure.cardcom.solutions/api/v11/CompanyOperations/MeagedGetCompanyInfo` as const }
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
): Promise<{ ResponseCode?: number | undefined; Description?: string | null | undefined; MeagedSapakInfo?: { SapakNumber?: number | undefined; SapakStatus?: import("/home/m/dev/git/cardcom-ts-sdk/src/index").SapakStatus | undefined; }[] | null | undefined; }> {
  const { client: request = fetch, ...requestConfig } = config

  const requestData: { SupplierUserName: string; Secret: string; BusinessRegistrationNumber?: number | null | undefined; SapakNumber?: number | null | undefined; } | null = companyOperationsMeagedGetCompanyInfoMutationRequestSchema.parse(data)
  const res: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-client/dist/clients/axios").ResponseConfig<import("/home/m/dev/git/cardcom-ts-sdk/src/index").MeagedGetCompanyInfoResponse> = await request<
    CompanyOperationsMeagedGetCompanyInfoMutationResponse,
    ResponseErrorConfig<Error>,
    CompanyOperationsMeagedGetCompanyInfoMutationRequest
  >({ method: 'POST', url: getCompanyOperationsMeagedGetCompanyInfoUrl().url.toString(), data: requestData, ...requestConfig })
  return companyOperationsMeagedGetCompanyInfoMutationResponseSchema.parse(res.data)
}