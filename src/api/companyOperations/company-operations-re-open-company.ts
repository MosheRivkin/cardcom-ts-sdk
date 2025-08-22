/* eslint-disable no-alert, no-console */

import fetch from "@kubb/plugin-client/clients/axios";
import type { CompanyOperationsReOpenCompanyMutationRequest, CompanyOperationsReOpenCompanyMutationResponse, CompanyOperationsReOpenCompany400, CompanyOperationsReOpenCompany401 } from "../../types/CompanyOperationsReOpenCompany.ts";
import type { RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import { companyOperationsReOpenCompanyMutationResponseSchema, companyOperationsReOpenCompanyMutationRequestSchema } from "../../zod/companyOperations/company-operations-re-open-company-schema.ts";

function getCompanyOperationsReOpenCompanyUrl() {
  const res =
  {
    method: 'POST',
    url: `/api/v11/CompanyOperations/ReOpenCompany` as const
  }
  return res
}

/**
 * @description RecruitmentSystem operations
 * @summary Reopen company
 * {@link /api/v11/CompanyOperations/ReOpenCompany}
 */
export async function companyOperationsReOpenCompany({ data }: { data?: CompanyOperationsReOpenCompanyMutationRequest }, config: Partial<RequestConfig<CompanyOperationsReOpenCompanyMutationRequest>> & { client?: typeof fetch } = {}) {
  const { client: request = fetch, ...requestConfig } = config

  const requestData = companyOperationsReOpenCompanyMutationRequestSchema.parse(data)
  const res = await request<CompanyOperationsReOpenCompanyMutationResponse, ResponseErrorConfig<CompanyOperationsReOpenCompany400 | CompanyOperationsReOpenCompany401>, CompanyOperationsReOpenCompanyMutationRequest>({ method: "POST", url: getCompanyOperationsReOpenCompanyUrl().url.toString(), data: requestData, ...requestConfig })
  return companyOperationsReOpenCompanyMutationResponseSchema.parse(res.data)
}