/* eslint-disable no-alert, no-console */

import fetch from "@kubb/plugin-client/clients/axios";
import type { CompanyOperationsNewCompanyMutationRequest, CompanyOperationsNewCompanyMutationResponse, CompanyOperationsNewCompany400, CompanyOperationsNewCompany401 } from "../../types/CompanyOperationsNewCompany.ts";
import type { RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import { companyOperationsNewCompanyMutationResponseSchema, companyOperationsNewCompanyMutationRequestSchema } from "../../zod/companyOperations/company-operations-new-company-schema.ts";

function getCompanyOperationsNewCompanyUrl() {
  const res =
  {
    method: 'POST',
    url: `/api/v11/CompanyOperations/NewCompany` as const
  }
  return res
}

/**
 * @description RecruitmentSystem operations
 * @summary New company
 * {@link /api/v11/CompanyOperations/NewCompany}
 */
export async function companyOperationsNewCompany({ data }: { data?: CompanyOperationsNewCompanyMutationRequest }, config: Partial<RequestConfig<CompanyOperationsNewCompanyMutationRequest>> & { client?: typeof fetch } = {}) {
  const { client: request = fetch, ...requestConfig } = config

  const requestData = companyOperationsNewCompanyMutationRequestSchema.parse(data)
  const res = await request<CompanyOperationsNewCompanyMutationResponse, ResponseErrorConfig<CompanyOperationsNewCompany400 | CompanyOperationsNewCompany401>, CompanyOperationsNewCompanyMutationRequest>({ method: "POST", url: getCompanyOperationsNewCompanyUrl().url.toString(), data: requestData, ...requestConfig })
  return companyOperationsNewCompanyMutationResponseSchema.parse(res.data)
}